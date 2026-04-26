import Anthropic from "@anthropic-ai/sdk";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const ALLOWED_ORIGINS = [
  "https://leiback.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
];

const SYSTEM_PROMPT = `You are an expert travel planner. You write concise, actionable, day-by-day itineraries that travelers will actually follow.

# Output format

Use Markdown. Structure each response as:

1. A one-paragraph **Trip overview** that captures the vibe and arc of the trip in 2-3 sentences.
2. A **Day-by-day** plan, with each day as its own heading (## Day 1: <subtitle>) describing the day's theme.
3. For each day, write tight bullet sections:
   - **Morning** — 1-2 specific suggestions
   - **Afternoon** — 1-2 specific suggestions
   - **Evening** — 1-2 specific suggestions including a dinner pick
   - **Tip** — one practical, non-obvious insight (timing, booking, neighborhood, transit, etc.)
4. End with a **Practical notes** section covering: arrival/departure thoughts, transit basics, what to book ahead, and 2-3 things to skip.

# Style

- Be specific, not generic. "Lunch in Sham Shui Po — Tim Ho Wan for dim sum" is better than "have lunch at a local restaurant."
- Match the energy and pacing to the trip's length and purpose. Romantic trips are slower; fun trips have nightlife; family trips have variety; solo trips have flexibility.
- Calibrate to the budget tier. For Budget, suggest hawker stalls, public transit, free viewpoints. For Mid-range, neighborhood favorites and well-reviewed mid-priced spots. For Splurge, tasting menus, private guides, top hotels.
- Take the origin city and transport into account. A 5-day trip from Tokyo to Bangkok is different from a 5-day trip from London — adjust for jet lag, flight time, what's worth doing on day 1 (probably nothing strenuous after a long flight).
- For multi-purpose trips (e.g., "Family + Romantic"), interleave activities that serve both — don't compartmentalize into "kid days" and "adult days."
- Keep it conversational. Avoid travel-brochure clichés ("a feast for the senses", "off the beaten path", "hidden gem", "must-see").
- Aim for 60-100 words per day section. The whole itinerary should fit comfortably in one read.

# What to avoid

- Generic filler ("explore the city", "soak in the atmosphere", "enjoy local cuisine").
- Listing 5+ things per time slot — pick the best 1-2.
- Unverifiable specifics like exact menu items or prices. Use neighborhoods and venue names, not made-up details.
- Telling the traveler what they "must" do. Suggest, don't command.
- Repeating the trip parameters back at them. They already know they have 7 days; just plan the days.`;

interface ItineraryRequest {
  destination?: string;
  country?: string;
  days?: number;
  budget?: number;
  purposes?: string[];
  transport?: string;
  origin?: string;
}

const PURPOSE_LABELS: Record<string, string> = {
  fun: "Fun with friends",
  family: "Family gathering",
  romantic: "Romantic getaway",
  solo: "Solo trip",
  business: "Business",
  other: "Other",
};

const BUDGET_LABELS: Record<number, string> = {
  1: "Budget",
  2: "Mid-range",
  3: "Splurge",
};

const TRANSPORT_LABELS: Record<string, string> = {
  flight: "flying",
  train: "train",
  drive: "self-drive",
  local: "staying local (no long-distance travel)",
  any: "any",
};

function buildUserPrompt(req: ItineraryRequest): string {
  const lines: string[] = [];
  lines.push(
    `Plan a ${req.days}-day trip to ${req.destination}${req.country ? ", " + req.country : ""}.`
  );
  if (req.origin) lines.push(`Starting from: ${req.origin}.`);
  if (req.transport && req.transport !== "any") {
    lines.push(`Travel mode: ${TRANSPORT_LABELS[req.transport] ?? req.transport}.`);
  }
  if (req.purposes && req.purposes.length) {
    const labels = req.purposes.map((p) => PURPOSE_LABELS[p] ?? p);
    lines.push(`Trip purpose: ${labels.join(" + ")}.`);
  }
  if (req.budget && BUDGET_LABELS[req.budget]) {
    lines.push(`Budget tier: ${BUDGET_LABELS[req.budget]}.`);
  }
  lines.push(
    `Provide a day-by-day itinerary tailored to these specifics. Keep it actionable and grounded.`
  );
  return lines.join(" ");
}

function corsHeaders(origin: string | null): Record<string, string> {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/itinerary") {
      return new Response("Not found", { status: 404, headers: cors });
    }
    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors });
    }

    let body: ItineraryRequest;
    try {
      body = (await request.json()) as ItineraryRequest;
    } catch {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }

    if (!body.destination || !body.days) {
      return new Response(
        JSON.stringify({ error: "Missing destination or days" }),
        { status: 400, headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    const userPrompt = buildUserPrompt(body);
    const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

    try {
      const stream = client.messages.stream({
        model: "claude-sonnet-4-6",
        max_tokens: 8000,
        thinking: { type: "adaptive" },
        output_config: { effort: "medium" },
        system: [
          {
            type: "text",
            text: SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: userPrompt }],
      });

      const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
      const writer = writable.getWriter();
      const encoder = new TextEncoder();

      (async () => {
        try {
          for await (const event of stream) {
            if (
              event.type === "content_block_delta" &&
              event.delta.type === "text_delta"
            ) {
              await writer.write(encoder.encode(event.delta.text));
            }
          }
        } catch (err) {
          const msg = err instanceof Error ? err.message : "stream error";
          await writer.write(encoder.encode(`\n\n[error: ${msg}]`));
        } finally {
          await writer.close();
        }
      })();

      return new Response(readable, {
        headers: {
          ...cors,
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-store",
        },
      });
    } catch (err) {
      const msg = err instanceof Error ? err.message : "unknown error";
      return new Response(JSON.stringify({ error: msg }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};
