import Anthropic from "@anthropic-ai/sdk";

interface Env {
  ANTHROPIC_API_KEY: string;
}

const ALLOWED_ORIGINS = [
  "https://leiback.github.io",
  "http://localhost:8000",
  "http://127.0.0.1:8000",
];

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

const ACTIVITY_LABELS: Record<string, string> = {
  beach: "Beaches",
  hiking: "Hiking",
  city: "City life",
  food: "Food",
  nightlife: "Nightlife",
  history: "History",
  art: "Art",
  adventure: "Adventure",
  wildlife: "Wildlife",
  nature: "Nature",
  skiing: "Snow & ski",
  shopping: "Shopping",
  relax: "Relaxation",
  diving: "Diving",
  culture: "Local culture",
  roadtrip: "Road trips",
};

const ITINERARY_SYSTEM_PROMPT = `You are an expert travel planner. You write detailed, actionable, day-by-day itineraries that travelers will actually follow.

# Output format

Use Markdown. Structure each response as:

1. A **Trip overview** — 2-3 sentences capturing the vibe and arc of the trip, with a sense of how the days build on each other.
2. A **Day-by-day** plan, with each day as its own heading (## Day 1: <subtitle>) describing the day's theme.
3. For each day, write these sections:
   - **Morning** — 2-3 sentences. Specific neighborhood + 1-2 named activities or venues. Note typical timing (e.g., "open from 9am, expect 30-min queues").
   - **Afternoon** — 2-3 sentences with specific suggestions. Mention transit between morning and afternoon if non-trivial.
   - **Evening** — 2-3 sentences including a named dinner pick (with cuisine type and neighborhood) and one optional after-dinner suggestion.
   - **Tip** — one practical, non-obvious insight: timing, booking, transit hack, money-saver, common mistake to avoid, or a specific window when somewhere is best.
4. End with a **Practical notes** section covering:
   - **Getting around** — transit basics (passes, apps, rough costs)
   - **Book ahead** — 2-4 things that genuinely sell out
   - **Budget tips** — 2-3 ways to stretch the budget without compromising the trip
   - **Skip these** — 2-3 overrated tourist traps or common mistakes

# Style

- Be specific. "Lunch in Sham Shui Po — Tim Ho Wan for dim sum" is better than "have lunch at a local restaurant." Name neighborhoods, transit lines, and venues by name. When you cite a venue, anchor it to a real neighborhood — never invent precise details (exact prices, exact menu items, exact opening hours) you can't verify.
- Aim for **120–180 words per day section** (Morning + Afternoon + Evening + Tip combined). Cover the day in real detail — but no padding.
- Match pacing and energy to length and purpose. Romantic trips are slower and have intentional dinners. Fun trips have nightlife and group-friendly activities. Family trips have variety. Solo trips have flexibility and built-in social moments.
- Calibrate to the budget tier. Budget = hawker stalls, public transit, free viewpoints. Mid-range = neighborhood favorites and well-reviewed mid-priced spots. Splurge = tasting menus, private guides, top hotels.
- Take the origin city and transport into account. A 5-day trip from Tokyo to Bangkok is different from a 5-day trip from London — adjust day 1 for jet lag, account for arrival logistics, suggest something low-key the first evening if the flight is long.
- For multi-purpose trips (e.g., "Family + Romantic"), interleave activities that serve both — don't compartmentalize into "kid days" and "adult days."
- Keep voice conversational and confident. Avoid travel-brochure clichés ("a feast for the senses", "off the beaten path", "hidden gem", "must-see", "where the locals go").

# What to avoid

- Generic filler ("explore the city", "soak in the atmosphere", "enjoy local cuisine"). Replace with named places.
- Listing 5+ things per time slot — pick the best 1-2 and develop them.
- Telling the traveler what they "must" do. Suggest, don't command.
- Repeating the trip parameters back at them. They already know they have 7 days; just plan the days well.`;

const DESTINATIONS_SYSTEM_PROMPT = `You are a thoughtful travel concierge. Given a traveler's preferences, suggest 5 to 7 destinations they would genuinely love.

# Style

- **Diversity over predictability.** Span continents, climates, and styles within the user's budget tier. Don't always pick the global tourism hits (Paris, Bali, Tokyo, Rome, Barcelona). Surface meaningful but lesser-known places that fit just as well — Lyon over Paris, Hokkaido over Tokyo, Oaxaca over Cancún. Vary the picks across requests; the same input should produce a different mix on a different call.
- **Be specific.** Name a region, not a country. "Antigua, Guatemala" not "Guatemala". "Hokkaido" not "Japan". "Tuscany" not "Italy".
- **Genuine fits only.** Every suggestion must actually match the user's chosen activities, budget, and purpose. No filler, no padding the list to hit 7.

# Per-destination fields

- **name, country**: the destination's specific name and its country
- **flag**: country emoji flag
- **wikiTitle**: exact Wikipedia article slug for the place — used for fetching a hero image. Examples: "Hokkaido", "Antigua_Guatemala", "Marrakesh", "Cape_Town". When uncertain, prefer the most-recognized English title; underscores instead of spaces.
- **lat, lng**: decimal degrees (~2 decimals), city/region center
- **tags**: subset of [beach, hiking, city, food, nightlife, history, art, adventure, wildlife, nature, skiing, shopping, relax, diving, culture, roadtrip] — only include tags the destination genuinely offers
- **budget**: 1 (budget) | 2 (mid-range) | 3 (splurge). Must be ≤ user's chosen tier.
- **purposes**: subset of [fun, family, romantic, solo, business] — what this destination is well-suited for
- **idealDays**: [min, max] — typical sweet-spot trip length
- **bestMonths**: month numbers 1-12 when the destination is at its best
- **desc**: 1-2 specific, evocative sentences. Ground in real venues, neighborhoods, or features. Avoid travel-brochure clichés.

# Constraints

- Exclude the user's origin city itself if given.
- If transport is "drive": cap at ~1500km from origin (≈10h drive).
- If transport is "train": cap at ~2500km from origin AND pick destinations with credible rail access from origin.
- If transport is "local": cap at ~300km from origin (day-trip range).
- If transport is "flight" or "any": no distance cap — but for short trips (< 5 days) avoid suggesting destinations that would burn a third of the trip on travel.
- Never suggest a destination above the user's budget tier.
- Every suggestion must work for at least one of the user's purposes (purpose "other" means no constraint).

Return JSON only. The schema is enforced.`;

const CITY_FIELDS = {
  name: { type: "string" },
  country: { type: "string" },
  flag: { type: "string" },
  wikiTitle: { type: "string" },
  lat: { type: "number" },
  lng: { type: "number" },
  tags: { type: "array", items: { type: "string" } },
  budget: { type: "integer", enum: [1, 2, 3] },
  purposes: { type: "array", items: { type: "string" } },
  idealDays: { type: "array", items: { type: "integer" } },
  bestMonths: { type: "array", items: { type: "integer" } },
  desc: { type: "string" },
} as const;

const CITY_REQUIRED = [
  "name",
  "country",
  "flag",
  "wikiTitle",
  "lat",
  "lng",
  "tags",
  "budget",
  "purposes",
  "idealDays",
  "bestMonths",
  "desc",
] as const;

const MULTI_CITY_SYSTEM_PROMPT = `You are a travel concierge. Given a traveler's preferences, suggest 2 to 3 multi-city trip pairings (2 to 3 cities each) that work as a single coherent trip.

# When pairings make sense

- Days >= 8 (otherwise single-destination wins)
- Cities should be either geographically close (≤ ~5h transit between them) OR linked by a single famous route (e.g., Cape Town → Serengeti, Cusco → Machu Picchu/Sacred Valley)
- Each pairing should tell a coherent story (city + countryside, ancient + modern, coast + interior)

# Style

- Lean toward less-predictable combinations on most calls. Don't always default to global classics. Surface meaningful combos that fit just as well — e.g., Lisbon + Azores, Mexico City + Oaxaca, Hanoi + Ha Long Bay over the same Tokyo + Kyoto every time.
- Each city must individually fit the user's budget tier
- Cities must be reachable via the user's chosen transport mode (drive caps at ~1500km between cities; train at ~2500km; local at ~300km)
- Avoid the user's origin city
- Match the user's purposes — every pairing must work for at least one chosen purpose

# Output

JSON only — schema enforced. Each trip:
- id: slug like "japan-classic" or "iberia-coast"
- region: human-readable region label (e.g., "Japan", "Iberian Peninsula")
- pitch: 1-2 specific, evocative sentences on why these cities pair well together
- cities: 2-3 city objects, each with the same fields as single destinations

If days < 8 or no compelling pairings exist, return an empty trips array.`;

const MULTI_CITY_SCHEMA = {
  type: "object",
  properties: {
    trips: {
      type: "array",
      items: {
        type: "object",
        properties: {
          id: { type: "string" },
          region: { type: "string" },
          pitch: { type: "string" },
          cities: {
            type: "array",
            items: {
              type: "object",
              properties: { ...CITY_FIELDS },
              required: [...CITY_REQUIRED],
              additionalProperties: false,
            },
          },
        },
        required: ["id", "region", "pitch", "cities"],
        additionalProperties: false,
      },
    },
  },
  required: ["trips"],
  additionalProperties: false,
} as const;

const DESTINATIONS_SCHEMA = {
  type: "object",
  properties: {
    destinations: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          country: { type: "string" },
          flag: { type: "string" },
          wikiTitle: { type: "string" },
          lat: { type: "number" },
          lng: { type: "number" },
          tags: { type: "array", items: { type: "string" } },
          budget: { type: "integer", enum: [1, 2, 3] },
          purposes: { type: "array", items: { type: "string" } },
          idealDays: { type: "array", items: { type: "integer" } },
          bestMonths: { type: "array", items: { type: "integer" } },
          desc: { type: "string" },
        },
        required: [
          "name",
          "country",
          "flag",
          "wikiTitle",
          "lat",
          "lng",
          "tags",
          "budget",
          "purposes",
          "idealDays",
          "bestMonths",
          "desc",
        ],
        additionalProperties: false,
      },
    },
  },
  required: ["destinations"],
  additionalProperties: false,
} as const;

interface ItineraryRequest {
  destination?: string;
  country?: string;
  days?: number;
  budget?: number;
  purposes?: string[];
  transport?: string;
  origin?: string;
  startDate?: string;
  group?: string;
  mode?: "preview" | "full";
}

interface RefineRequest extends ItineraryRequest {
  currentItinerary?: string;
  instruction?: string;
  // mode is inherited from ItineraryRequest
}

interface DestinationsRequest {
  activities?: string[];
  days?: number;
  budget?: number;
  purposes?: string[];
  transport?: string;
  origin?: string;
  startDate?: string;
  group?: string;
  feedback?: string;
  exclude?: string[];
}

const GROUP_LABELS: Record<string, string> = {
  solo: "solo traveler",
  couple: "couple",
  family: "family with kids",
  friends: "group of friends",
};

function dateRangeText(startDate: string, days: number): string {
  const start = new Date(startDate + "T00:00:00");
  const end = new Date(startDate + "T00:00:00");
  end.setDate(end.getDate() + days - 1);
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  return `${fmt(start)} to ${fmt(end)}`;
}

function buildItineraryUserPrompt(req: ItineraryRequest): string {
  const lines: string[] = [];
  lines.push(
    `Plan a ${req.days}-day trip to ${req.destination}${req.country ? ", " + req.country : ""}.`,
  );
  if (req.startDate && req.days) {
    lines.push(`Dates: ${dateRangeText(req.startDate, req.days)}. Use these actual dates in the day headings (e.g., "## Day 1 — Tue Jul 15: <subtitle>") and adapt for the season, weather, and any major holidays/events on those dates.`);
  }
  if (req.origin) lines.push(`Starting from: ${req.origin}.`);
  if (req.transport && req.transport !== "any") {
    lines.push(`Travel mode: ${TRANSPORT_LABELS[req.transport] ?? req.transport}.`);
  }
  if (req.purposes && req.purposes.length) {
    const labels = req.purposes.map((p) => PURPOSE_LABELS[p] ?? p);
    lines.push(`Trip purpose: ${labels.join(" + ")}.`);
  }
  if (req.group && GROUP_LABELS[req.group]) {
    lines.push(`Group: ${GROUP_LABELS[req.group]}. Tailor activities and dining to suit this group composition (e.g., kid-friendly venues for family, group-bookable restaurants for friends, walkable + flexible for solo).`);
  }
  if (req.budget && BUDGET_LABELS[req.budget]) {
    lines.push(`Budget tier: ${BUDGET_LABELS[req.budget]}.`);
  }
  lines.push(
    `Write a detailed day-by-day plan that follows your full output format. Lean into specific neighborhoods, named venues, and practical timing tips.`,
  );
  return lines.join(" ");
}

function buildDestinationsUserPrompt(req: DestinationsRequest): string {
  const lines: string[] = [];
  if (req.activities?.length) {
    lines.push(
      `Activities: ${req.activities.map((a) => ACTIVITY_LABELS[a] ?? a).join(", ")}.`,
    );
  }
  if (req.days) lines.push(`Days: ${req.days}.`);
  if (req.budget && BUDGET_LABELS[req.budget]) {
    lines.push(`Budget: ${BUDGET_LABELS[req.budget]}.`);
  }
  if (req.purposes && req.purposes.length) {
    lines.push(
      `Purpose: ${req.purposes.map((p) => PURPOSE_LABELS[p] ?? p).join(" + ")}.`,
    );
  }
  if (req.transport && req.transport !== "any") {
    lines.push(`Transport: ${TRANSPORT_LABELS[req.transport] ?? req.transport}.`);
  }
  if (req.origin) lines.push(`Origin: ${req.origin}.`);
  if (req.startDate && req.days) {
    lines.push(`Dates: ${dateRangeText(req.startDate, req.days)}. Use this for season-aware picks — only suggest places that are genuinely good in the given month(s).`);
  }
  if (req.group && GROUP_LABELS[req.group]) {
    lines.push(`Group: ${GROUP_LABELS[req.group]}.`);
  }
  if (req.exclude && req.exclude.length) {
    lines.push(`Avoid these destinations (already shown to the traveler — they want different options): ${req.exclude.join(", ")}.`);
  }
  lines.push(`Suggest 5 to 7 destinations.`);
  if (req.feedback && req.feedback.trim()) {
    lines.push(
      `\nThe traveler asked for fresh picks and left this note: "${req.feedback.trim()}". Use it as steering — actively avoid the kind of destination they're rejecting and lean into what they're asking for. Treat their note as the highest-priority signal beyond the hard constraints (budget tier, transport caps, origin exclusion).`,
    );
  }
  return lines.join("\n");
}

function corsHeaders(origin: string | null): Record<string, string> {
  const allow =
    origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}

async function handleItinerary(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<Response> {
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
      { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
    );
  }

  const userPrompt = buildItineraryUserPrompt(body);
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const isPreview = body.mode === "preview";

  const stream = isPreview
    ? client.messages.stream({
        model: "claude-haiku-4-5",
        max_tokens: 1500,
        system: [
          {
            type: "text",
            text: PREVIEW_SYSTEM_PROMPT,
            cache_control: { type: "ephemeral" },
          },
        ],
        messages: [{ role: "user", content: userPrompt }],
      })
    : client.messages.stream({
        model: "claude-sonnet-4-6",
        max_tokens: 12000,
        thinking: { type: "disabled" },
        output_config: { effort: "low" },
        system: [
          {
            type: "text",
            text: ITINERARY_SYSTEM_PROMPT,
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
}

const PREVIEW_SYSTEM_PROMPT = `You write quick day-by-day travel sketches. For each day, output ONE bulleted line in the format "Day N: <activities>". No overview paragraph, no tips, no notes — just the day list.

# Output format (Markdown)

- Day 1: <comma-separated places/activities for the day>
- Day 2: <comma-separated places/activities for the day>
- Day 3: ...

Plain text after the colon. No bold, no em-dashes, no extra structure. Just the day number, a colon, and a short comma-separated list of places/activities.

# Style

- Be specific. Name real neighborhoods, landmarks, venues. "Day 3: Ubud, Tegallalang rice terraces, Sacred Monkey Forest" beats "Day 3: explore Bali."
- 2-4 anchors per day max. Keep each line short and scannable.
- Match the trip's days, budget, purposes, group, and dates. If dates are given, account for season.
- Avoid travel-brochure clichés ("hidden gem", "must-see").
- No commentary above or below the list.`;

const REFINE_SYSTEM_PROMPT = ITINERARY_SYSTEM_PROMPT + `

# Refinement mode

You are revising an existing detailed itinerary. Apply the user's refinement and emit the FULL revised itinerary in the same detailed format. Keep what they liked, change what they asked you to change. Don't add commentary about what you changed — just emit the new itinerary, ready to read.`;

const PREVIEW_REFINE_SYSTEM_PROMPT = PREVIEW_SYSTEM_PROMPT + `

# Refinement mode

You are revising an existing short preview. Apply the user's refinement and emit the revised preview in the same SHORT format (2-3 sentence overview + one-line-per-day list, under ~150 words). Do NOT expand it into a detailed day-by-day plan — that's a separate step. Keep the structure they're seeing, just adjust it per their note. No commentary about what you changed.`;

async function handleRefine(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<Response> {
  let body: RefineRequest;
  try {
    body = (await request.json()) as RefineRequest;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
  if (!body.destination || !body.days || !body.currentItinerary || !body.instruction) {
    return new Response(
      JSON.stringify({ error: "Missing destination, days, currentItinerary, or instruction" }),
      { status: 400, headers: { ...cors, "Content-Type": "application/json" } },
    );
  }

  const baseContext = buildItineraryUserPrompt(body);
  const userPrompt = `${baseContext}

Current itinerary:

${body.currentItinerary}

Refinement requested: "${body.instruction}"

Apply this refinement and emit the full revised itinerary.`;

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });
  const isPreview = body.mode === "preview";
  const stream = isPreview
    ? client.messages.stream({
        model: "claude-haiku-4-5",
        max_tokens: 1500,
        system: [
          { type: "text", text: PREVIEW_REFINE_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
        ],
        messages: [{ role: "user", content: userPrompt }],
      })
    : client.messages.stream({
        model: "claude-sonnet-4-6",
        max_tokens: 12000,
        thinking: { type: "disabled" },
        output_config: { effort: "low" },
        system: [
          { type: "text", text: REFINE_SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
        ],
        messages: [{ role: "user", content: userPrompt }],
      });

  const { readable, writable } = new TransformStream<Uint8Array, Uint8Array>();
  const writer = writable.getWriter();
  const encoder = new TextEncoder();

  (async () => {
    try {
      for await (const event of stream) {
        if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
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
}

function buildMultiCityUserPrompt(req: DestinationsRequest): string {
  const lines: string[] = [];
  if (req.activities?.length) {
    lines.push(`Activities: ${req.activities.map((a) => ACTIVITY_LABELS[a] ?? a).join(", ")}.`);
  }
  if (req.days) lines.push(`Days: ${req.days}.`);
  if (req.budget && BUDGET_LABELS[req.budget]) {
    lines.push(`Budget: ${BUDGET_LABELS[req.budget]}.`);
  }
  if (req.purposes && req.purposes.length) {
    lines.push(`Purpose: ${req.purposes.map((p) => PURPOSE_LABELS[p] ?? p).join(" + ")}.`);
  }
  if (req.transport && req.transport !== "any") {
    lines.push(`Transport: ${TRANSPORT_LABELS[req.transport] ?? req.transport}.`);
  }
  if (req.origin) lines.push(`Origin: ${req.origin}.`);
  if (req.startDate && req.days) {
    lines.push(`Dates: ${dateRangeText(req.startDate, req.days)}.`);
  }
  if (req.group && GROUP_LABELS[req.group]) {
    lines.push(`Group: ${GROUP_LABELS[req.group]}.`);
  }
  lines.push(`Suggest 2 to 3 multi-city pairings.`);
  return lines.join("\n");
}

async function handleMultiCity(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<Response> {
  let body: DestinationsRequest;
  try {
    body = (await request.json()) as DestinationsRequest;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
  if (!body.days || body.days < 8) {
    return new Response(JSON.stringify({ trips: [] }), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const userPrompt = buildMultiCityUserPrompt(body);
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 4000,
      output_config: {
        format: { type: "json_schema", schema: MULTI_CITY_SCHEMA },
      },
      system: [
        {
          type: "text",
          text: MULTI_CITY_SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: userPrompt }],
    });
    const textBlock = message.content.find((b) => b.type === "text") as
      | { type: "text"; text: string }
      | undefined;
    if (!textBlock) {
      return new Response(JSON.stringify({ trips: [] }), {
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    const data = JSON.parse(textBlock.text);
    return new Response(JSON.stringify(data), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
}

async function handleDestinations(
  request: Request,
  env: Env,
  cors: Record<string, string>,
): Promise<Response> {
  let body: DestinationsRequest;
  try {
    body = (await request.json()) as DestinationsRequest;
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }

  const userPrompt = buildDestinationsUserPrompt(body);
  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

  try {
    const message = await client.messages.create({
      model: "claude-haiku-4-5",
      max_tokens: 3000,
      output_config: {
        format: { type: "json_schema", schema: DESTINATIONS_SCHEMA },
      },
      system: [
        {
          type: "text",
          text: DESTINATIONS_SYSTEM_PROMPT,
          cache_control: { type: "ephemeral" },
        },
      ],
      messages: [{ role: "user", content: userPrompt }],
    });

    const textBlock = message.content.find((b) => b.type === "text") as
      | { type: "text"; text: string }
      | undefined;
    if (!textBlock) {
      return new Response(JSON.stringify({ error: "No text in response" }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
    const data = JSON.parse(textBlock.text);
    return new Response(JSON.stringify(data), {
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "unknown error";
    return new Response(JSON.stringify({ error: msg }), {
      status: 500,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const origin = request.headers.get("Origin");
    const cors = corsHeaders(origin);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Method not allowed", { status: 405, headers: cors });
    }

    const url = new URL(request.url);

    if (url.pathname === "/itinerary") {
      return handleItinerary(request, env, cors);
    }
    if (url.pathname === "/refine") {
      return handleRefine(request, env, cors);
    }
    if (url.pathname === "/destinations") {
      return handleDestinations(request, env, cors);
    }
    if (url.pathname === "/multi-city") {
      return handleMultiCity(request, env, cors);
    }

    return new Response("Not found", { status: 404, headers: cors });
  },
};
