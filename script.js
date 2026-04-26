const ACTIVITIES = [
  { id: "beach",      label: "Beaches",     emoji: "🏖️" },
  { id: "hiking",     label: "Hiking",      emoji: "🥾" },
  { id: "city",       label: "City life",   emoji: "🏙️" },
  { id: "food",       label: "Food",        emoji: "🍜" },
  { id: "nightlife",  label: "Nightlife",   emoji: "🍸" },
  { id: "history",    label: "History",     emoji: "🏛️" },
  { id: "art",        label: "Art",         emoji: "🎨" },
  { id: "adventure",  label: "Adventure",   emoji: "🪂" },
  { id: "wildlife",   label: "Wildlife",    emoji: "🦁" },
  { id: "nature",     label: "Nature",      emoji: "🌲" },
  { id: "skiing",     label: "Snow & ski",  emoji: "⛷️" },
  { id: "shopping",   label: "Shopping",    emoji: "🛍️" },
  { id: "relax",      label: "Relaxation",  emoji: "🧖" },
  { id: "diving",     label: "Diving",      emoji: "🤿" },
  { id: "culture",    label: "Local culture", emoji: "🎭" },
  { id: "roadtrip",   label: "Road trips",  emoji: "🚗" },
];

const PURPOSES = {
  fun:      { label: "Fun with friends",  icon: "🎉" },
  family:   { label: "Family gathering",  icon: "👨‍👩‍👧" },
  romantic: { label: "Romantic getaway",  icon: "💞" },
  solo:     { label: "Solo trip",         icon: "🎒" },
  business: { label: "Business",          icon: "💼" },
  other:    { label: "Other",             icon: "✨" },
};

const BUDGET_LABELS = {
  1: { label: "Budget",     icon: "💲" },
  2: { label: "Mid-range",  icon: "💲💲" },
  3: { label: "Splurge",    icon: "💲💲💲" },
};

// budget: 1=cheap, 2=mid, 3=splurge.  idealDays: typical sweet spot.
const DESTINATIONS = [
  { name: "Bali",        country: "Indonesia",   flag: "🇮🇩",
    tags: ["beach","food","relax","culture","nature","diving"],
    budget: 1, purposes: ["fun","romantic","family"], idealDays: [7, 12],
    desc: "Lush rice terraces, surf-ready coastlines, and centuries-old temples — all wrapped in some of the warmest hospitality in Southeast Asia." },
  { name: "Tokyo",       country: "Japan",       flag: "🇯🇵",
    tags: ["city","food","shopping","culture","nightlife","art"],
    budget: 3, purposes: ["solo","business","fun","family"], idealDays: [5, 8],
    desc: "Neon-lit streets, hidden ramen counters, and quiet temple gardens. A megacity that somehow feels intimate at every corner." },
  { name: "Queenstown",  country: "New Zealand", flag: "🇳🇿",
    tags: ["adventure","hiking","nature","skiing","roadtrip"],
    budget: 3, purposes: ["fun","romantic","solo"], idealDays: [5, 9],
    desc: "The self-styled adventure capital of the world: bungee, jet boats, alpine trails, and ski fields, all framed by impossibly blue lakes." },
  { name: "Paris",       country: "France",      flag: "🇫🇷",
    tags: ["city","food","art","history","shopping","culture"],
    budget: 3, purposes: ["romantic","business","solo","family"], idealDays: [4, 7],
    desc: "World-class museums, café culture, and architecture that earns every photograph. A walking city built for slow afternoons." },
  { name: "Costa Rica",  country: "Costa Rica",  flag: "🇨🇷",
    tags: ["nature","adventure","wildlife","beach","hiking","diving"],
    budget: 2, purposes: ["family","fun","romantic"], idealDays: [8, 14],
    desc: "Cloud forests, volcanoes, and two coastlines packed with sloths, surf, and zip-lines. Pura vida, indeed." },
  { name: "Reykjavík",   country: "Iceland",     flag: "🇮🇸",
    tags: ["nature","adventure","hiking","relax","roadtrip"],
    budget: 3, purposes: ["romantic","solo","fun"], idealDays: [6, 10],
    desc: "Black-sand beaches, geothermal lagoons, and waterfalls every twenty minutes. The Ring Road may be the single best road trip on Earth." },
  { name: "Barcelona",   country: "Spain",       flag: "🇪🇸",
    tags: ["city","food","beach","art","nightlife","culture"],
    budget: 2, purposes: ["fun","romantic","solo","family"], idealDays: [4, 7],
    desc: "Gaudí's surreal architecture, tapas crawls until 2am, and a beach inside the city. Effortlessly stylish." },
  { name: "Banff",       country: "Canada",      flag: "🇨🇦",
    tags: ["hiking","nature","skiing","wildlife","roadtrip"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [5, 8],
    desc: "Turquoise glacial lakes and jagged peaks, with bears and elk wandering the edges. World-class skiing in winter, hiking in summer." },
  { name: "Marrakech",   country: "Morocco",     flag: "🇲🇦",
    tags: ["culture","history","food","shopping","art"],
    budget: 1, purposes: ["romantic","fun","solo"], idealDays: [4, 6],
    desc: "Souks alive with spices, riads with hidden courtyards, and the Atlas Mountains a short drive away. A feast for the senses." },
  { name: "Santorini",   country: "Greece",      flag: "🇬🇷",
    tags: ["beach","food","relax","history","culture"],
    budget: 3, purposes: ["romantic","family"], idealDays: [4, 6],
    desc: "Whitewashed villages tumbling toward the Aegean, sunsets that earn the cliché, and Mediterranean food at its simplest and best." },
  { name: "New York",    country: "USA",         flag: "🇺🇸",
    tags: ["city","food","shopping","art","nightlife","culture"],
    budget: 3, purposes: ["business","fun","solo","family"], idealDays: [4, 7],
    desc: "Five boroughs, infinite neighborhoods. Every cuisine, every art form, every hour of the day — happening somewhere." },
  { name: "Patagonia",   country: "Argentina/Chile", flag: "🏔️",
    tags: ["hiking","adventure","nature","wildlife","roadtrip"],
    budget: 3, purposes: ["solo","fun","romantic"], idealDays: [10, 16],
    desc: "Granite spires, glaciers, and steppe stretching to the horizon. The kind of trip you remember in detail for the rest of your life." },
  { name: "Kyoto",       country: "Japan",       flag: "🇯🇵",
    tags: ["culture","history","food","relax","art"],
    budget: 2, purposes: ["romantic","solo","family"], idealDays: [4, 6],
    desc: "Thousands of temples, tea houses tucked down stone lanes, and bamboo groves you can hear breathing. Old Japan at its most distilled." },
  { name: "Cape Town",   country: "South Africa",flag: "🇿🇦",
    tags: ["beach","wildlife","food","adventure","nature","hiking"],
    budget: 2, purposes: ["fun","family","romantic","solo"], idealDays: [7, 12],
    desc: "Where Table Mountain meets two oceans. Wine country, penguin colonies, and safaris all within a few hours." },
  { name: "Swiss Alps",  country: "Switzerland", flag: "🇨🇭",
    tags: ["skiing","hiking","nature","relax","roadtrip"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [6, 10],
    desc: "Storybook villages, scenic trains that feel scripted, and trails for every fitness level. In winter, some of the best skiing on the planet." },
  { name: "Bangkok",     country: "Thailand",    flag: "🇹🇭",
    tags: ["food","city","nightlife","shopping","culture"],
    budget: 1, purposes: ["fun","solo","business"], idealDays: [3, 5],
    desc: "Street food that ruins all other street food, glittering temples, and a nightlife that runs until sunrise." },
  { name: "Cusco",       country: "Peru",        flag: "🇵🇪",
    tags: ["history","hiking","culture","adventure","food"],
    budget: 1, purposes: ["solo","fun","romantic"], idealDays: [5, 8],
    desc: "The gateway to Machu Picchu, perched at 11,000ft. Inca stonework, Andean markets, and some of the best ceviche outside Lima." },
  { name: "Maldives",    country: "Maldives",    flag: "🇲🇻",
    tags: ["beach","relax","diving","food"],
    budget: 3, purposes: ["romantic","family"], idealDays: [5, 8],
    desc: "Overwater villas, reefs you can step into from your room, and the kind of stillness that makes a week feel like a month." },
  { name: "Lisbon",      country: "Portugal",    flag: "🇵🇹",
    tags: ["city","food","beach","history","art","nightlife","culture"],
    budget: 2, purposes: ["solo","fun","romantic","family"], idealDays: [4, 6],
    desc: "Hilltop miradouros, custard tarts on every corner, and a coastline of surf beaches twenty minutes from downtown." },
  { name: "Serengeti",   country: "Tanzania",    flag: "🇹🇿",
    tags: ["wildlife","nature","adventure"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [6, 10],
    desc: "The great migration, big-five game drives, and night skies you forgot were possible. The original safari." },
];

const state = {
  selected: new Set(),
  days: 7,
  budget: 2,
  purpose: "fun",
  ranked: [],
};

const $ = (id) => document.getElementById(id);

function renderActivities() {
  const grid = $("activity-grid");
  grid.innerHTML = ACTIVITIES.map(a => `
    <div class="activity" data-id="${a.id}">
      <span class="emoji">${a.emoji}</span>
      <span class="label">${a.label}</span>
    </div>
  `).join("");

  grid.querySelectorAll(".activity").forEach(el => {
    el.addEventListener("click", () => {
      const id = el.dataset.id;
      if (state.selected.has(id)) {
        state.selected.delete(id);
        el.classList.remove("selected");
      } else {
        state.selected.add(id);
        el.classList.add("selected");
      }
      $("next-to-details-btn").disabled = state.selected.size === 0;
    });
  });
}

function setupDetails() {
  const slider = $("days-slider");
  const input = $("days-input");
  const sync = (v) => {
    const n = Math.max(1, Math.min(60, parseInt(v, 10) || 1));
    state.days = n;
    input.value = n;
    if (n <= parseInt(slider.max, 10)) slider.value = n;
  };
  slider.addEventListener("input", (e) => sync(e.target.value));
  input.addEventListener("input", (e) => sync(e.target.value));

  $("budget-chips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $("budget-chips").querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      state.budget = parseInt(chip.dataset.budget, 10);
    });
  });

  $("purpose-chips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $("purpose-chips").querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      state.purpose = chip.dataset.purpose;
    });
  });
}

function rankDestinations() {
  const picks = state.selected;
  const chosenBudget = state.budget;
  const chosenPurpose = state.purpose;

  let pool = DESTINATIONS.filter(d => d.budget <= chosenBudget);
  if (pool.length === 0) pool = DESTINATIONS;

  const scored = pool.map(d => {
    const matches = d.tags.filter(t => picks.has(t));
    let score = matches.length;
    if (chosenPurpose !== "other" && d.purposes.includes(chosenPurpose)) {
      score += 1.5;
    }
    return { ...d, score, matches };
  });
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);
  return scored.filter(d => d.score > 0).slice(0, 5);
}

function renderOptions() {
  state.ranked = rankDestinations();
  const list = $("options-list");

  if (state.ranked.length === 0) {
    list.innerHTML = `<p class="sub">No matches yet — try picking different activities or widening your budget.</p>`;
    return;
  }

  list.innerHTML = state.ranked.map((d, i) => `
    <div class="dest-card" data-idx="${i}">
      <div class="flag">${d.flag}</div>
      <div class="name">${d.name}</div>
      <div class="country">${d.country}</div>
      <div class="meta">
        <span class="meta-item">${BUDGET_LABELS[d.budget].icon}</span>
        <span class="meta-item">${d.idealDays[0]}–${d.idealDays[1]} days</span>
      </div>
      <div class="tags">
        ${d.matches.map(t => `<span class="tag">${labelFor(t)}</span>`).join("")}
      </div>
    </div>
  `).join("");

  list.querySelectorAll(".dest-card").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.idx, 10);
      showResult(state.ranked[idx]);
    });
  });
}

function labelFor(id) {
  const a = ACTIVITIES.find(x => x.id === id);
  return a ? a.label : id;
}

function durationNote(dest, days) {
  const [min, max] = dest.idealDays;
  if (days < min) return `Heads up: most travelers spend ${min}–${max} days here. ${days} day${days === 1 ? "" : "s"} will feel rushed — stick to one base.`;
  if (days > max) return `You've got more time than the typical ${min}–${max} days here. Great chance to add a side trip.`;
  return `Your ${days} days is right in the sweet spot (${min}–${max}).`;
}

function showResult(dest) {
  const card = $("result-card");
  const matchedLabels = dest.matches.map(labelFor).join(", ");
  const purpose = PURPOSES[state.purpose];
  const budget = BUDGET_LABELS[dest.budget];
  card.innerHTML = `
    <div class="flag">${dest.flag}</div>
    <h2>${dest.name}</h2>
    <div class="country">${dest.country}</div>
    <p class="desc">${dest.desc}</p>

    <div class="trip-summary">
      <div class="summary-item"><span class="summary-icon">📅</span><span>${state.days} day${state.days === 1 ? "" : "s"}</span></div>
      <div class="summary-item"><span class="summary-icon">${budget.icon}</span><span>${budget.label}</span></div>
      <div class="summary-item"><span class="summary-icon">${purpose.icon}</span><span>${purpose.label}</span></div>
    </div>

    <div class="why"><strong>Why this fits:</strong> matches your love of ${matchedLabels}${state.purpose !== "other" && dest.purposes.includes(state.purpose) ? `, and works well for a ${purpose.label.toLowerCase()}` : ""}.</div>
    <div class="duration-note">${durationNote(dest, state.days)}</div>
  `;
  goTo("step-result");
}

function goTo(stepId) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  $(stepId).classList.add("active");
  if (stepId === "step-options") renderOptions();
}

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => goTo(btn.dataset.next));
});

$("next-to-details-btn").addEventListener("click", () => goTo("step-details"));
$("find-btn").addEventListener("click", () => goTo("step-options"));

$("surprise-btn").addEventListener("click", () => {
  if (state.ranked.length === 0) return;
  const top = state.ranked.slice(0, Math.min(3, state.ranked.length));
  const pick = top[Math.floor(Math.random() * top.length)];
  showResult(pick);
});

renderActivities();
setupDetails();
