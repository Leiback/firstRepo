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

const DESTINATIONS = [
  { name: "Bali",        country: "Indonesia",   flag: "🇮🇩",
    tags: ["beach","food","relax","culture","nature","diving"],
    desc: "Lush rice terraces, surf-ready coastlines, and centuries-old temples — all wrapped in some of the warmest hospitality in Southeast Asia." },
  { name: "Tokyo",       country: "Japan",       flag: "🇯🇵",
    tags: ["city","food","shopping","culture","nightlife","art"],
    desc: "Neon-lit streets, hidden ramen counters, and quiet temple gardens. A megacity that somehow feels intimate at every corner." },
  { name: "Queenstown",  country: "New Zealand", flag: "🇳🇿",
    tags: ["adventure","hiking","nature","skiing","roadtrip"],
    desc: "The self-styled adventure capital of the world: bungee, jet boats, alpine trails, and ski fields, all framed by impossibly blue lakes." },
  { name: "Paris",       country: "France",      flag: "🇫🇷",
    tags: ["city","food","art","history","shopping","culture"],
    desc: "World-class museums, café culture, and architecture that earns every photograph. A walking city built for slow afternoons." },
  { name: "Costa Rica",  country: "Costa Rica",  flag: "🇨🇷",
    tags: ["nature","adventure","wildlife","beach","hiking","diving"],
    desc: "Cloud forests, volcanoes, and two coastlines packed with sloths, surf, and zip-lines. Pura vida, indeed." },
  { name: "Reykjavík",   country: "Iceland",     flag: "🇮🇸",
    tags: ["nature","adventure","hiking","relax","roadtrip"],
    desc: "Black-sand beaches, geothermal lagoons, and waterfalls every twenty minutes. The Ring Road may be the single best road trip on Earth." },
  { name: "Barcelona",   country: "Spain",       flag: "🇪🇸",
    tags: ["city","food","beach","art","nightlife","culture"],
    desc: "Gaudí's surreal architecture, tapas crawls until 2am, and a beach inside the city. Effortlessly stylish." },
  { name: "Banff",       country: "Canada",      flag: "🇨🇦",
    tags: ["hiking","nature","skiing","wildlife","roadtrip"],
    desc: "Turquoise glacial lakes and jagged peaks, with bears and elk wandering the edges. World-class skiing in winter, hiking in summer." },
  { name: "Marrakech",   country: "Morocco",     flag: "🇲🇦",
    tags: ["culture","history","food","shopping","art"],
    desc: "Souks alive with spices, riads with hidden courtyards, and the Atlas Mountains a short drive away. A feast for the senses." },
  { name: "Santorini",   country: "Greece",      flag: "🇬🇷",
    tags: ["beach","food","relax","history","culture"],
    desc: "Whitewashed villages tumbling toward the Aegean, sunsets that earn the cliché, and Mediterranean food at its simplest and best." },
  { name: "New York",    country: "USA",         flag: "🇺🇸",
    tags: ["city","food","shopping","art","nightlife","culture"],
    desc: "Five boroughs, infinite neighborhoods. Every cuisine, every art form, every hour of the day — happening somewhere." },
  { name: "Patagonia",   country: "Argentina/Chile", flag: "🏔️",
    tags: ["hiking","adventure","nature","wildlife","roadtrip"],
    desc: "Granite spires, glaciers, and steppe stretching to the horizon. The kind of trip you remember in detail for the rest of your life." },
  { name: "Kyoto",       country: "Japan",       flag: "🇯🇵",
    tags: ["culture","history","food","relax","art"],
    desc: "Thousands of temples, tea houses tucked down stone lanes, and bamboo groves you can hear breathing. Old Japan at its most distilled." },
  { name: "Cape Town",   country: "South Africa",flag: "🇿🇦",
    tags: ["beach","wildlife","food","adventure","nature","hiking"],
    desc: "Where Table Mountain meets two oceans. Wine country, penguin colonies, and safaris all within a few hours." },
  { name: "Swiss Alps",  country: "Switzerland", flag: "🇨🇭",
    tags: ["skiing","hiking","nature","relax","roadtrip"],
    desc: "Storybook villages, scenic trains that feel scripted, and trails for every fitness level. In winter, some of the best skiing on the planet." },
  { name: "Bangkok",     country: "Thailand",    flag: "🇹🇭",
    tags: ["food","city","nightlife","shopping","culture"],
    desc: "Street food that ruins all other street food, glittering temples, and a nightlife that runs until sunrise." },
  { name: "Cusco",       country: "Peru",        flag: "🇵🇪",
    tags: ["history","hiking","culture","adventure","food"],
    desc: "The gateway to Machu Picchu, perched at 11,000ft. Inca stonework, Andean markets, and some of the best ceviche outside Lima." },
  { name: "Maldives",    country: "Maldives",    flag: "🇲🇻",
    tags: ["beach","relax","diving","food"],
    desc: "Overwater villas, reefs you can step into from your room, and the kind of stillness that makes a week feel like a month." },
  { name: "Lisbon",      country: "Portugal",    flag: "🇵🇹",
    tags: ["city","food","beach","history","art","nightlife","culture"],
    desc: "Hilltop miradouros, custard tarts on every corner, and a coastline of surf beaches twenty minutes from downtown." },
  { name: "Serengeti",   country: "Tanzania",    flag: "🇹🇿",
    tags: ["wildlife","nature","adventure"],
    desc: "The great migration, big-five game drives, and night skies you forgot were possible. The original safari." },
];

const state = {
  selected: new Set(),
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
      $("find-btn").disabled = state.selected.size === 0;
    });
  });
}

function rankDestinations() {
  const picks = state.selected;
  const scored = DESTINATIONS.map(d => {
    const matches = d.tags.filter(t => picks.has(t));
    return { ...d, score: matches.length, matches };
  });
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);
  return scored.filter(d => d.score > 0).slice(0, 5);
}

function renderOptions() {
  state.ranked = rankDestinations();
  const list = $("options-list");

  if (state.ranked.length === 0) {
    list.innerHTML = `<p class="sub">No matches yet — try picking a few different activities.</p>`;
    return;
  }

  list.innerHTML = state.ranked.map((d, i) => `
    <div class="dest-card" data-idx="${i}">
      <div class="flag">${d.flag}</div>
      <div class="name">${d.name}</div>
      <div class="country">${d.country}</div>
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

function showResult(dest) {
  const card = $("result-card");
  const matchedLabels = dest.matches.map(labelFor).join(", ");
  card.innerHTML = `
    <div class="flag">${dest.flag}</div>
    <h2>${dest.name}</h2>
    <div class="country">${dest.country}</div>
    <p class="desc">${dest.desc}</p>
    <div class="why"><strong>Why this fits:</strong> matches your love of ${matchedLabels}.</div>
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

$("find-btn").addEventListener("click", () => goTo("step-options"));

$("surprise-btn").addEventListener("click", () => {
  if (state.ranked.length === 0) return;
  const top = state.ranked.slice(0, Math.min(3, state.ranked.length));
  const pick = top[Math.floor(Math.random() * top.length)];
  showResult(pick);
});

renderActivities();
