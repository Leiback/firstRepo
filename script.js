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

const MONTH_NAMES = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const ORIGIN_CITIES = [
  { name: "New York",      country: "USA",         lat: 40.71,  lng:  -74.00 },
  { name: "Los Angeles",   country: "USA",         lat: 34.05,  lng: -118.24 },
  { name: "Chicago",       country: "USA",         lat: 41.88,  lng:  -87.63 },
  { name: "San Francisco", country: "USA",         lat: 37.77,  lng: -122.42 },
  { name: "Seattle",       country: "USA",         lat: 47.61,  lng: -122.33 },
  { name: "Boston",        country: "USA",         lat: 42.36,  lng:  -71.06 },
  { name: "Washington DC", country: "USA",         lat: 38.91,  lng:  -77.04 },
  { name: "Atlanta",       country: "USA",         lat: 33.75,  lng:  -84.39 },
  { name: "Dallas",        country: "USA",         lat: 32.78,  lng:  -96.80 },
  { name: "Houston",       country: "USA",         lat: 29.76,  lng:  -95.37 },
  { name: "Miami",         country: "USA",         lat: 25.76,  lng:  -80.19 },
  { name: "Toronto",       country: "Canada",      lat: 43.65,  lng:  -79.38 },
  { name: "Vancouver",     country: "Canada",      lat: 49.28,  lng: -123.12 },
  { name: "Montreal",      country: "Canada",      lat: 45.50,  lng:  -73.57 },
  { name: "Mexico City",   country: "Mexico",      lat: 19.43,  lng:  -99.13 },
  { name: "São Paulo",     country: "Brazil",      lat: -23.55, lng:  -46.63 },
  { name: "Rio de Janeiro",country: "Brazil",      lat: -22.91, lng:  -43.17 },
  { name: "Buenos Aires",  country: "Argentina",   lat: -34.60, lng:  -58.45 },
  { name: "Lima",          country: "Peru",        lat: -12.05, lng:  -77.04 },
  { name: "Bogotá",        country: "Colombia",    lat:   4.71, lng:  -74.07 },
  { name: "Santiago",      country: "Chile",       lat: -33.45, lng:  -70.66 },
  { name: "London",        country: "UK",          lat: 51.51,  lng:   -0.13 },
  { name: "Paris",         country: "France",      lat: 48.85,  lng:    2.35 },
  { name: "Berlin",        country: "Germany",     lat: 52.52,  lng:   13.41 },
  { name: "Munich",        country: "Germany",     lat: 48.14,  lng:   11.58 },
  { name: "Madrid",        country: "Spain",       lat: 40.42,  lng:   -3.70 },
  { name: "Barcelona",     country: "Spain",       lat: 41.39,  lng:    2.17 },
  { name: "Rome",          country: "Italy",       lat: 41.90,  lng:   12.50 },
  { name: "Milan",         country: "Italy",       lat: 45.46,  lng:    9.19 },
  { name: "Amsterdam",     country: "Netherlands", lat: 52.37,  lng:    4.89 },
  { name: "Brussels",      country: "Belgium",     lat: 50.85,  lng:    4.35 },
  { name: "Lisbon",        country: "Portugal",    lat: 38.72,  lng:   -9.14 },
  { name: "Vienna",        country: "Austria",     lat: 48.21,  lng:   16.37 },
  { name: "Zurich",        country: "Switzerland", lat: 47.38,  lng:    8.54 },
  { name: "Prague",        country: "Czechia",     lat: 50.08,  lng:   14.44 },
  { name: "Warsaw",        country: "Poland",      lat: 52.23,  lng:   21.01 },
  { name: "Budapest",      country: "Hungary",     lat: 47.50,  lng:   19.04 },
  { name: "Athens",        country: "Greece",      lat: 37.98,  lng:   23.73 },
  { name: "Stockholm",     country: "Sweden",      lat: 59.33,  lng:   18.07 },
  { name: "Oslo",          country: "Norway",      lat: 59.91,  lng:   10.75 },
  { name: "Copenhagen",    country: "Denmark",     lat: 55.68,  lng:   12.57 },
  { name: "Helsinki",      country: "Finland",     lat: 60.17,  lng:   24.94 },
  { name: "Dublin",        country: "Ireland",     lat: 53.35,  lng:   -6.26 },
  { name: "Edinburgh",     country: "UK",          lat: 55.95,  lng:   -3.19 },
  { name: "Istanbul",      country: "Turkey",      lat: 41.01,  lng:   28.98 },
  { name: "Moscow",        country: "Russia",      lat: 55.76,  lng:   37.62 },
  { name: "Cairo",         country: "Egypt",       lat: 30.04,  lng:   31.24 },
  { name: "Casablanca",    country: "Morocco",     lat: 33.57,  lng:   -7.59 },
  { name: "Lagos",         country: "Nigeria",     lat:  6.52,  lng:    3.38 },
  { name: "Nairobi",       country: "Kenya",       lat: -1.29,  lng:   36.82 },
  { name: "Johannesburg",  country: "South Africa",lat: -26.20, lng:   28.04 },
  { name: "Cape Town",     country: "South Africa",lat: -33.92, lng:   18.42 },
  { name: "Dubai",         country: "UAE",         lat: 25.20,  lng:   55.27 },
  { name: "Doha",          country: "Qatar",       lat: 25.29,  lng:   51.53 },
  { name: "Riyadh",        country: "Saudi Arabia",lat: 24.71,  lng:   46.68 },
  { name: "Tel Aviv",      country: "Israel",      lat: 32.08,  lng:   34.78 },
  { name: "Mumbai",        country: "India",       lat: 19.08,  lng:   72.88 },
  { name: "Delhi",         country: "India",       lat: 28.61,  lng:   77.21 },
  { name: "Bangalore",     country: "India",       lat: 12.97,  lng:   77.59 },
  { name: "Karachi",       country: "Pakistan",    lat: 24.86,  lng:   67.01 },
  { name: "Dhaka",         country: "Bangladesh",  lat: 23.81,  lng:   90.41 },
  { name: "Bangkok",       country: "Thailand",    lat: 13.75,  lng:  100.50 },
  { name: "Singapore",     country: "Singapore",   lat:  1.35,  lng:  103.82 },
  { name: "Kuala Lumpur",  country: "Malaysia",    lat:  3.14,  lng:  101.69 },
  { name: "Jakarta",       country: "Indonesia",   lat: -6.21,  lng:  106.85 },
  { name: "Manila",        country: "Philippines", lat: 14.60,  lng:  120.98 },
  { name: "Hanoi",         country: "Vietnam",     lat: 21.03,  lng:  105.85 },
  { name: "Ho Chi Minh City", country: "Vietnam",  lat: 10.82,  lng:  106.63 },
  { name: "Hong Kong",     country: "Hong Kong",   lat: 22.32,  lng:  114.17 },
  { name: "Shanghai",      country: "China",       lat: 31.23,  lng:  121.47 },
  { name: "Beijing",       country: "China",       lat: 39.90,  lng:  116.41 },
  { name: "Seoul",         country: "South Korea", lat: 37.57,  lng:  126.98 },
  { name: "Tokyo",         country: "Japan",       lat: 35.68,  lng:  139.76 },
  { name: "Osaka",         country: "Japan",       lat: 34.69,  lng:  135.50 },
  { name: "Taipei",        country: "Taiwan",      lat: 25.04,  lng:  121.56 },
  { name: "Sydney",        country: "Australia",   lat: -33.87, lng:  151.21 },
  { name: "Melbourne",     country: "Australia",   lat: -37.81, lng:  144.96 },
  { name: "Brisbane",      country: "Australia",   lat: -27.47, lng:  153.03 },
  { name: "Perth",         country: "Australia",   lat: -31.95, lng:  115.86 },
  { name: "Auckland",      country: "New Zealand", lat: -36.85, lng:  174.76 },
];
const ORIGIN_LABEL = (c) => `${c.name}, ${c.country}`;

const DESTINATIONS = [
  { name: "Bali",        country: "Indonesia",   flag: "🇮🇩", wikiTitle: "Bali", lat: -8.34, lng: 115.09,
    tags: ["beach","food","relax","culture","nature","diving"],
    budget: 1, purposes: ["fun","romantic","family"], idealDays: [7, 12],
    bestMonths: [4,5,6,7,8,9,10],
    desc: "Lush rice terraces, surf-ready coastlines, and centuries-old temples — all wrapped in some of the warmest hospitality in Southeast Asia." },
  { name: "Tokyo",       country: "Japan",       flag: "🇯🇵", wikiTitle: "Tokyo", lat: 35.68, lng: 139.76,
    tags: ["city","food","shopping","culture","nightlife","art"],
    budget: 3, purposes: ["solo","business","fun","family"], idealDays: [5, 8],
    bestMonths: [3,4,5,9,10,11],
    desc: "Neon-lit streets, hidden ramen counters, and quiet temple gardens. A megacity that somehow feels intimate at every corner." },
  { name: "Queenstown",  country: "New Zealand", flag: "🇳🇿", wikiTitle: "Queenstown,_New_Zealand", lat: -45.03, lng: 168.66,
    tags: ["adventure","hiking","nature","skiing","roadtrip"],
    budget: 3, purposes: ["fun","romantic","solo"], idealDays: [5, 9],
    bestMonths: [12,1,2,6,7,8],
    desc: "The self-styled adventure capital of the world: bungee, jet boats, alpine trails, and ski fields, all framed by impossibly blue lakes." },
  { name: "Paris",       country: "France",      flag: "🇫🇷", wikiTitle: "Paris", lat: 48.85, lng: 2.35,
    tags: ["city","food","art","history","shopping","culture"],
    budget: 3, purposes: ["romantic","business","solo","family"], idealDays: [4, 7],
    bestMonths: [4,5,6,9,10],
    desc: "World-class museums, café culture, and architecture that earns every photograph. A walking city built for slow afternoons." },
  { name: "Costa Rica",  country: "Costa Rica",  flag: "🇨🇷", wikiTitle: "Costa_Rica", lat: 9.93, lng: -84.08,
    tags: ["nature","adventure","wildlife","beach","hiking","diving"],
    budget: 2, purposes: ["family","fun","romantic"], idealDays: [8, 14],
    bestMonths: [12,1,2,3,4],
    desc: "Cloud forests, volcanoes, and two coastlines packed with sloths, surf, and zip-lines. Pura vida, indeed." },
  { name: "Reykjavík",   country: "Iceland",     flag: "🇮🇸", wikiTitle: "Reykjavík", lat: 64.13, lng: -21.94,
    tags: ["nature","adventure","hiking","relax","roadtrip"],
    budget: 3, purposes: ["romantic","solo","fun"], idealDays: [6, 10],
    bestMonths: [6,7,8],
    desc: "Black-sand beaches, geothermal lagoons, and waterfalls every twenty minutes. The Ring Road may be the single best road trip on Earth." },
  { name: "Barcelona",   country: "Spain",       flag: "🇪🇸", wikiTitle: "Barcelona", lat: 41.39, lng: 2.17,
    tags: ["city","food","beach","art","nightlife","culture"],
    budget: 2, purposes: ["fun","romantic","solo","family"], idealDays: [4, 7],
    bestMonths: [4,5,6,9,10],
    desc: "Gaudí's surreal architecture, tapas crawls until 2am, and a beach inside the city. Effortlessly stylish." },
  { name: "Banff",       country: "Canada",      flag: "🇨🇦", wikiTitle: "Banff_National_Park", lat: 51.18, lng: -115.57,
    tags: ["hiking","nature","skiing","wildlife","roadtrip"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [5, 8],
    bestMonths: [6,7,8,9,12,1,2,3],
    desc: "Turquoise glacial lakes and jagged peaks, with bears and elk wandering the edges. World-class skiing in winter, hiking in summer." },
  { name: "Marrakech",   country: "Morocco",     flag: "🇲🇦", wikiTitle: "Marrakesh", lat: 31.63, lng: -8.01,
    tags: ["culture","history","food","shopping","art"],
    budget: 1, purposes: ["romantic","fun","solo"], idealDays: [4, 6],
    bestMonths: [3,4,5,10,11],
    desc: "Souks alive with spices, riads with hidden courtyards, and the Atlas Mountains a short drive away. A feast for the senses." },
  { name: "Santorini",   country: "Greece",      flag: "🇬🇷", wikiTitle: "Santorini", lat: 36.39, lng: 25.46,
    tags: ["beach","food","relax","history","culture"],
    budget: 3, purposes: ["romantic","family"], idealDays: [4, 6],
    bestMonths: [5,6,9,10],
    desc: "Whitewashed villages tumbling toward the Aegean, sunsets that earn the cliché, and Mediterranean food at its simplest and best." },
  { name: "New York",    country: "USA",         flag: "🇺🇸", wikiTitle: "New_York_City", lat: 40.71, lng: -74.00,
    tags: ["city","food","shopping","art","nightlife","culture"],
    budget: 3, purposes: ["business","fun","solo","family"], idealDays: [4, 7],
    bestMonths: [4,5,6,9,10,11],
    desc: "Five boroughs, infinite neighborhoods. Every cuisine, every art form, every hour of the day — happening somewhere." },
  { name: "Patagonia",   country: "Argentina/Chile", flag: "🏔️", wikiTitle: "Patagonia", lat: -49.32, lng: -72.89,
    tags: ["hiking","adventure","nature","wildlife","roadtrip"],
    budget: 3, purposes: ["solo","fun","romantic"], idealDays: [10, 16],
    bestMonths: [11,12,1,2,3],
    desc: "Granite spires, glaciers, and steppe stretching to the horizon. The kind of trip you remember in detail for the rest of your life." },
  { name: "Kyoto",       country: "Japan",       flag: "🇯🇵", wikiTitle: "Kyoto", lat: 35.01, lng: 135.77,
    tags: ["culture","history","food","relax","art"],
    budget: 2, purposes: ["romantic","solo","family"], idealDays: [4, 6],
    bestMonths: [3,4,5,10,11],
    desc: "Thousands of temples, tea houses tucked down stone lanes, and bamboo groves you can hear breathing. Old Japan at its most distilled." },
  { name: "Cape Town",   country: "South Africa",flag: "🇿🇦", wikiTitle: "Cape_Town", lat: -33.92, lng: 18.42,
    tags: ["beach","wildlife","food","adventure","nature","hiking"],
    budget: 2, purposes: ["fun","family","romantic","solo"], idealDays: [7, 12],
    bestMonths: [11,12,1,2,3],
    desc: "Where Table Mountain meets two oceans. Wine country, penguin colonies, and safaris all within a few hours." },
  { name: "Swiss Alps",  country: "Switzerland", flag: "🇨🇭", wikiTitle: "Swiss_Alps", lat: 46.55, lng: 8.32,
    tags: ["skiing","hiking","nature","relax","roadtrip"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [6, 10],
    bestMonths: [6,7,8,9,12,1,2,3],
    desc: "Storybook villages, scenic trains that feel scripted, and trails for every fitness level. In winter, some of the best skiing on the planet." },
  { name: "Bangkok",     country: "Thailand",    flag: "🇹🇭", wikiTitle: "Bangkok", lat: 13.75, lng: 100.50,
    tags: ["food","city","nightlife","shopping","culture"],
    budget: 1, purposes: ["fun","solo","business"], idealDays: [3, 5],
    bestMonths: [11,12,1,2],
    desc: "Street food that ruins all other street food, glittering temples, and a nightlife that runs until sunrise." },
  { name: "Cusco",       country: "Peru",        flag: "🇵🇪", wikiTitle: "Cusco", lat: -13.53, lng: -71.97,
    tags: ["history","hiking","culture","adventure","food"],
    budget: 1, purposes: ["solo","fun","romantic"], idealDays: [5, 8],
    bestMonths: [5,6,7,8,9],
    desc: "The gateway to Machu Picchu, perched at 11,000ft. Inca stonework, Andean markets, and some of the best ceviche outside Lima." },
  { name: "Maldives",    country: "Maldives",    flag: "🇲🇻", wikiTitle: "Maldives", lat: 3.20, lng: 73.22,
    tags: ["beach","relax","diving","food"],
    budget: 3, purposes: ["romantic","family"], idealDays: [5, 8],
    bestMonths: [11,12,1,2,3,4],
    desc: "Overwater villas, reefs you can step into from your room, and the kind of stillness that makes a week feel like a month." },
  { name: "Lisbon",      country: "Portugal",    flag: "🇵🇹", wikiTitle: "Lisbon", lat: 38.72, lng: -9.14,
    tags: ["city","food","beach","history","art","nightlife","culture"],
    budget: 2, purposes: ["solo","fun","romantic","family"], idealDays: [4, 6],
    bestMonths: [4,5,6,9,10],
    desc: "Hilltop miradouros, custard tarts on every corner, and a coastline of surf beaches twenty minutes from downtown." },
  { name: "Serengeti",   country: "Tanzania",    flag: "🇹🇿", wikiTitle: "Serengeti", lat: -2.33, lng: 34.83,
    tags: ["wildlife","nature","adventure"],
    budget: 3, purposes: ["family","romantic","solo"], idealDays: [6, 10],
    bestMonths: [7,8,9,10,1,2],
    desc: "The great migration, big-five game drives, and night skies you forgot were possible. The original safari." },
];

const MULTI_CITY_TRIPS = [
  { id: "japan-classic", cities: ["Tokyo","Kyoto"], minDays: 8, region: "Japan",
    pitch: "Modern Tokyo plus traditional Kyoto on the Shinkansen — Japan's greatest hits." },
  { id: "se-asia-mix",   cities: ["Bangkok","Bali"], minDays: 10, region: "Southeast Asia",
    pitch: "City heat and street food in Bangkok, then unwind on Bali's beaches and rice terraces." },
  { id: "iberia",        cities: ["Lisbon","Barcelona"], minDays: 8, region: "Iberian Peninsula",
    pitch: "Two of Europe's most underrated cities, an easy flight apart." },
  { id: "europe-classic",cities: ["Paris","Swiss Alps"], minDays: 9, region: "Western Europe",
    pitch: "Big-city culture in Paris paired with alpine air — a few hours apart by TGV." },
  { id: "africa-safari", cities: ["Cape Town","Serengeti"], minDays: 12, region: "Southern + East Africa",
    pitch: "Cape Town's vineyards and ocean drives, then onto the Serengeti's plains." },
  { id: "south-america", cities: ["Cusco","Patagonia"], minDays: 14, region: "South America",
    pitch: "Inca history at altitude, then granite peaks at the bottom of the world." },
  { id: "tropics",       cities: ["Bangkok","Maldives"], minDays: 10, region: "Asia + Indian Ocean",
    pitch: "Action and street food, then total stillness on overwater villas." },
  { id: "iceland-london",cities: ["Reykjavík","Paris"], minDays: 9, region: "North Atlantic",
    pitch: "Geothermal pools and waterfalls, then a Paris stopover on the way home." },
];

const FAVORITES_KEY = "travelapp:favorites";
const IMG_CACHE_PREFIX = "travelapp:img:";
const WORKER_URL = "https://travelapp-worker.travelapp.workers.dev";

const TRANSPORT = {
  any:    { label: "No preference", icon: "🤷", maxKm: Infinity },
  flight: { label: "Flight",        icon: "✈️", maxKm: Infinity },
  train:  { label: "Train",         icon: "🚆", maxKm: 2500 },
  drive:  { label: "Driving",       icon: "🚗", maxKm: 1500 },
  local:  { label: "Stay local",    icon: "🚌", maxKm: 300  },
};

const state = {
  selected: new Set(),
  days: 7,
  budget: 2,
  purposes: new Set(["fun"]),
  transport: "any",
  origin: null,
  ranked: [],
  lastDest: null,
  itineraries: {},
};

// ---------- Compress / decompress (for share URL itinerary) ----------
async function compressToB64Url(text) {
  const stream = new Blob([text]).stream().pipeThrough(new CompressionStream("gzip"));
  const buf = await new Response(stream).arrayBuffer();
  const u8 = new Uint8Array(buf);
  let bin = "";
  for (let i = 0; i < u8.length; i++) bin += String.fromCharCode(u8[i]);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function decompressFromB64Url(b64) {
  let s = b64.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  const stream = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
  return await new Response(stream).text();
}

const $ = (id) => document.getElementById(id);
const destByName = (name) => DESTINATIONS.find(d => d.name === name);

// ---------- Distance / origin ----------
function haversineKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const toRad = (x) => x * Math.PI / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function flightTimeApprox(km) {
  if (km < 200) return null;
  const hours = km / 850 + 1;
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return m > 0 ? `~${h}h ${m}m` : `~${h}h`;
}

function distancePenalty(km, days) {
  let penalty = (km / 15000) * 0.4;
  if (days <= 3 && km > 5000) penalty += 2.0;
  else if (days <= 5 && km > 9000) penalty += 1.5;
  else if (days <= 7 && km > 13000) penalty += 1.0;
  return penalty;
}

// ---------- Image fetching (Wikipedia) ----------
const imageCache = new Map();
async function fetchDestinationImage(wikiTitle) {
  if (imageCache.has(wikiTitle)) return imageCache.get(wikiTitle);
  const lsKey = IMG_CACHE_PREFIX + wikiTitle;
  try {
    const stored = localStorage.getItem(lsKey);
    if (stored) {
      const parsed = JSON.parse(stored);
      imageCache.set(wikiTitle, parsed);
      return parsed;
    }
  } catch {}
  try {
    const res = await fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${wikiTitle}`);
    if (!res.ok) return null;
    const data = await res.json();
    const out = {
      thumb: data.thumbnail?.source || null,
      full: data.originalimage?.source || data.thumbnail?.source || null,
    };
    imageCache.set(wikiTitle, out);
    try { localStorage.setItem(lsKey, JSON.stringify(out)); } catch {}
    return out;
  } catch {
    return null;
  }
}

function applyImage(el, wikiTitle, kind = "thumb") {
  fetchDestinationImage(wikiTitle).then(img => {
    if (!img || !img[kind]) return;
    el.style.backgroundImage = `url("${img[kind]}")`;
    el.classList.add("loaded");
  });
}

// ---------- Best-time-to-visit ----------
function monthStatus(bestMonths) {
  const m = new Date().getMonth() + 1;
  if (bestMonths.includes(m)) return "peak";
  const prev = m === 1 ? 12 : m - 1;
  const next = m === 12 ? 1 : m + 1;
  if (bestMonths.includes(prev) || bestMonths.includes(next)) return "shoulder";
  return "off";
}

function monthStatusLabel(status) {
  return { peak: "In season now", shoulder: "Shoulder season", off: "Off-season" }[status];
}

function bestMonthsRange(months) {
  const sorted = [...months].sort((a,b) => a-b);
  const groups = [];
  let cur = [sorted[0]];
  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i-1] + 1) cur.push(sorted[i]);
    else { groups.push(cur); cur = [sorted[i]]; }
  }
  groups.push(cur);
  return groups.map(g => g.length === 1 ? MONTH_NAMES[g[0]-1] : `${MONTH_NAMES[g[0]-1]}–${MONTH_NAMES[g[g.length-1]-1]}`).join(", ");
}

// ---------- Favorites (localStorage) ----------
function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]"); }
  catch { return []; }
}
function isFavorite(name) { return getFavorites().includes(name); }
function toggleFavorite(name) {
  const favs = getFavorites();
  const idx = favs.indexOf(name);
  if (idx >= 0) favs.splice(idx, 1); else favs.push(name);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  renderFavorites();
}

function renderFavorites() {
  const wrap = $("favorites");
  const favs = getFavorites().map(destByName).filter(Boolean);
  if (favs.length === 0) { wrap.innerHTML = ""; wrap.classList.remove("active"); return; }
  wrap.classList.add("active");
  wrap.innerHTML = `
    <h3>Your saved trips</h3>
    <div class="fav-list">
      ${favs.map(d => `
        <button class="fav-chip" data-name="${d.name}">
          <span class="fav-flag">${d.flag}</span><span>${d.name}</span>
          <span class="fav-x" data-remove="${d.name}" aria-label="Remove">×</span>
        </button>
      `).join("")}
    </div>
  `;
  wrap.querySelectorAll(".fav-chip").forEach(btn => {
    btn.addEventListener("click", (e) => {
      if (e.target.dataset.remove) {
        toggleFavorite(e.target.dataset.remove);
        return;
      }
      const dest = destByName(btn.dataset.name);
      if (dest) showResult(dest);
    });
  });
}

// ---------- URL state (share links) ----------
async function encodeStateToURL(destName) {
  const params = new URLSearchParams();
  if (state.selected.size) params.set("picks", [...state.selected].join(","));
  params.set("days", state.days);
  params.set("budget", state.budget);
  params.set("purposes", [...state.purposes].join(","));
  params.set("transport", state.transport);
  if (state.origin) params.set("origin", state.origin.name);
  if (destName) params.set("dest", destName);
  if (destName && state.itineraries[destName]) {
    try {
      params.set("itin", await compressToB64Url(state.itineraries[destName]));
    } catch (e) {
      console.warn("itinerary compression failed:", e);
    }
  }
  return `${location.origin}${location.pathname}?${params.toString()}`;
}

function applyURLState() {
  const params = new URLSearchParams(location.search);
  const picks = (params.get("picks") || "").split(",").filter(Boolean);
  const days = parseInt(params.get("days"), 10);
  const budget = parseInt(params.get("budget"), 10);
  const purposesParam = params.get("purposes") || params.get("purpose");
  const transportParam = params.get("transport");
  const originName = params.get("origin");
  const dest = params.get("dest");
  const itinB64 = params.get("itin");
  if (!picks.length && !days && !budget && !purposesParam && !transportParam && !originName && !dest && !itinB64) return false;

  picks.forEach(p => state.selected.add(p));
  document.querySelectorAll("#activity-grid .activity").forEach(el => {
    if (state.selected.has(el.dataset.id)) el.classList.add("selected");
  });
  if (Number.isFinite(days)) {
    state.days = days;
    $("days-slider").value = Math.min(parseInt($("days-slider").max, 10), days);
    $("days-input").value = days;
  }
  if ([1,2,3].includes(budget)) {
    state.budget = budget;
    $("budget-chips").querySelectorAll(".chip").forEach(c => c.classList.toggle("selected", parseInt(c.dataset.budget,10) === budget));
  }
  if (purposesParam) {
    const ids = purposesParam.split(",").filter(p => PURPOSES[p]);
    if (ids.length) {
      state.purposes = new Set(ids);
      $("purpose-chips").querySelectorAll(".chip").forEach(c => c.classList.toggle("selected", state.purposes.has(c.dataset.purpose)));
    }
  }
  if (transportParam && TRANSPORT[transportParam]) {
    state.transport = transportParam;
    $("transport-chips").querySelectorAll(".chip").forEach(c => c.classList.toggle("selected", c.dataset.transport === transportParam));
  }
  if (originName) {
    const c = ORIGIN_CITIES.find(c => c.name === originName);
    if (c) {
      state.origin = { ...c };
      $("origin-input").value = ORIGIN_LABEL(c);
      const status = $("origin-status");
      if (status) { status.textContent = `✓ Coming from ${ORIGIN_LABEL(c)}`; status.className = "origin-status ok"; }
    }
  }
  if (dest) {
    let d = destByName(dest);
    if (!d) {
      // Shared link from an AI-generated destination not in our local list — synthesize a minimal record
      d = {
        name: dest,
        country: "",
        flag: "🌍",
        wikiTitle: dest.replace(/\s+/g, "_"),
        budget: state.budget,
        purposes: [],
        idealDays: [Number.isFinite(days) ? days : 5, Number.isFinite(days) ? days : 7],
        bestMonths: [1,2,3,4,5,6,7,8,9,10,11,12],
        tags: [...state.selected],
        desc: "Shared destination.",
        lat: 0, lng: 0,
      };
    }
    if (itinB64) {
      decompressFromB64Url(itinB64).then((text) => {
        state.itineraries[d.name] = text;
        renderSavedItinerary(text);
      }).catch((e) => console.warn("itinerary decompress failed:", e));
    }
    showResult(d);
    return true;
  }
  if (state.selected.size) {
    $("next-to-details-btn").disabled = false;
    goTo("step-options");
    return true;
  }
  return true;
}

function renderSavedItinerary(text) {
  const out = $("ai-output");
  if (!out) return;
  out.classList.add("active");
  out.innerHTML = `<div class="ai-content">${window.marked ? marked.parse(text) : text.replace(/</g, "&lt;")}</div>`;
  const btn = $("ai-btn");
  if (btn) btn.textContent = "✨ Regenerate";
}

async function copyShareLink(destName) {
  const url = await encodeStateToURL(destName);
  try {
    await navigator.clipboard.writeText(url);
    const hasItin = destName && state.itineraries[destName];
    showToast(hasItin ? "Link copied — itinerary included ✨" : "Link copied — share away ✨");
  } catch {
    showToast(url);
  }
}

let toastTimer = null;
function showToast(msg) {
  let t = $("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

// ---------- Activities ----------
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

// ---------- Trip details ----------
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
      const id = chip.dataset.purpose;
      if (state.purposes.has(id)) {
        if (state.purposes.size > 1) {
          state.purposes.delete(id);
          chip.classList.remove("selected");
        }
      } else {
        state.purposes.add(id);
        chip.classList.add("selected");
      }
    });
  });

  $("transport-chips").querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      $("transport-chips").querySelectorAll(".chip").forEach(c => c.classList.remove("selected"));
      chip.classList.add("selected");
      state.transport = chip.dataset.transport;
    });
  });

  const originList = $("origin-list");
  originList.innerHTML = ORIGIN_CITIES.map(c => `<option value="${ORIGIN_LABEL(c)}"></option>`).join("");
  const originInput = $("origin-input");
  const originStatus = $("origin-status");
  const updateOrigin = () => {
    const val = originInput.value.trim();
    if (!val) {
      state.origin = null;
      originStatus.textContent = "Optional — improves recommendations.";
      originStatus.className = "origin-status";
      return;
    }
    const match = ORIGIN_CITIES.find(c => ORIGIN_LABEL(c).toLowerCase() === val.toLowerCase()
      || c.name.toLowerCase() === val.toLowerCase());
    if (match) {
      state.origin = { ...match };
      originInput.value = ORIGIN_LABEL(match);
      originStatus.textContent = `✓ Coming from ${ORIGIN_LABEL(match)}`;
      originStatus.className = "origin-status ok";
    } else {
      state.origin = null;
      originStatus.textContent = "Pick a city from the list (or leave blank).";
      originStatus.className = "origin-status warn";
    }
  };
  originInput.addEventListener("change", updateOrigin);
  originInput.addEventListener("blur", updateOrigin);
}

// ---------- Ranking ----------
function purposeMatchCount(dest) {
  let count = 0;
  for (const p of state.purposes) {
    if (p !== "other" && dest.purposes.includes(p)) count++;
  }
  return count;
}

function purposeBonus(matchCount) {
  if (matchCount === 0) return 0;
  return 1.0 + (matchCount - 1) * 0.4;
}

function rankDestinations() {
  const picks = state.selected;
  let pool = DESTINATIONS.filter(d => d.budget <= state.budget);
  if (pool.length === 0) pool = DESTINATIONS;

  if (state.origin) {
    pool = pool.filter(d => haversineKm(state.origin.lat, state.origin.lng, d.lat, d.lng) > 50);

    const cap = TRANSPORT[state.transport]?.maxKm ?? Infinity;
    if (cap !== Infinity) {
      const filtered = pool.filter(d => haversineKm(state.origin.lat, state.origin.lng, d.lat, d.lng) <= cap);
      if (filtered.length > 0) pool = filtered;
    }
  }

  const scored = pool.map(d => {
    const matches = d.tags.filter(t => picks.has(t));
    let score = matches.length;
    score += purposeBonus(purposeMatchCount(d));
    let distanceKm = null, flight = null;
    if (state.origin) {
      distanceKm = haversineKm(state.origin.lat, state.origin.lng, d.lat, d.lng);
      flight = flightTimeApprox(distanceKm);
      score -= distancePenalty(distanceKm, state.days);
    }
    return { ...d, score, matches, distanceKm, flight };
  });
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);
  return scored.filter(d => d.score > 0).slice(0, 5);
}

function rankMultiCity() {
  if (state.days < 8) return [];
  const picks = state.selected;
  const scored = MULTI_CITY_TRIPS
    .filter(t => state.days >= t.minDays)
    .map(t => {
      const cities = t.cities.map(destByName).filter(Boolean);
      if (cities.length < 2) return null;
      if (cities.some(c => c.budget > state.budget)) return null;
      const tagSet = new Set(cities.flatMap(c => c.tags));
      const matches = [...tagSet].filter(tag => picks.has(tag));
      let score = matches.length;
      const purposeMatch = cities.some(c => purposeMatchCount(c) > 0);
      if (purposeMatch) score += 1;
      return { ...t, cities, matches, score };
    })
    .filter(Boolean);
  scored.sort((a, b) => b.score - a.score || Math.random() - 0.5);
  return scored.filter(t => t.score > 0).slice(0, 3);
}

// ---------- Options page ----------
async function renderOptions() {
  const list = $("options-list");
  list.innerHTML = `<div class="ai-loading">Picking 5–7 destinations for you<span class="dots"><span>.</span><span>.</span><span>.</span></span></div>`;
  $("compare-btn").disabled = true;
  $("surprise-btn").disabled = true;
  $("multi-city").classList.remove("active");

  let aiDests = null;
  try {
    const res = await fetch(`${WORKER_URL}/destinations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        activities: [...state.selected],
        days: state.days,
        budget: state.budget,
        purposes: [...state.purposes],
        transport: state.transport,
        origin: state.origin?.name,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data.destinations) && data.destinations.length > 0) {
        aiDests = data.destinations;
      }
    }
  } catch (e) {
    console.warn("AI destinations failed, using local ranking:", e);
  }

  if (aiDests) {
    state.ranked = enrichAIDestinations(aiDests);
  } else {
    state.ranked = rankDestinations();
  }

  renderRankedCards();
  $("compare-btn").disabled = state.ranked.length < 2;
  $("surprise-btn").disabled = state.ranked.length === 0;
  renderMultiCity();
}

function enrichAIDestinations(dests) {
  return dests.map((d) => {
    const matches = (d.tags || []).filter((t) => state.selected.has(t));
    let distanceKm = null;
    let flight = null;
    if (state.origin && typeof d.lat === "number" && typeof d.lng === "number") {
      distanceKm = haversineKm(state.origin.lat, state.origin.lng, d.lat, d.lng);
      flight = flightTimeApprox(distanceKm);
    }
    return { ...d, matches, distanceKm, flight, score: matches.length + 1 };
  });
}

function renderRankedCards() {
  const list = $("options-list");
  if (state.ranked.length === 0) {
    list.innerHTML = `<p class="sub">No matches yet — try picking different activities or widening your budget.</p>`;
    return;
  }
  list.innerHTML = state.ranked.map((d, i) => {
    const status = monthStatus(d.bestMonths);
    return `
      <div class="dest-card" data-idx="${i}">
        <div class="dest-img" data-wiki="${d.wikiTitle}">
          <span class="img-flag">${d.flag}</span>
        </div>
        <div class="dest-body">
          <div class="name">${d.name}</div>
          <div class="country">${d.country}</div>
          <div class="meta">
            <span class="meta-item">${BUDGET_LABELS[d.budget].icon}</span>
            <span class="meta-item">${d.idealDays[0]}–${d.idealDays[1]} days</span>
            <span class="meta-item season ${status}">${monthStatusLabel(status)}</span>
            ${d.flight ? `<span class="meta-item">✈ ${d.flight}</span>` : ""}
          </div>
          <div class="tags">
            ${d.matches.map(t => `<span class="tag">${labelFor(t)}</span>`).join("")}
          </div>
        </div>
      </div>
    `;
  }).join("");

  list.querySelectorAll(".dest-img").forEach(el => applyImage(el, el.dataset.wiki, "thumb"));
  list.querySelectorAll(".dest-card").forEach(el => {
    el.addEventListener("click", () => {
      const idx = parseInt(el.dataset.idx, 10);
      showResult(state.ranked[idx]);
    });
  });
}

function renderMultiCity() {
  const wrap = $("multi-city");
  const trips = rankMultiCity();
  if (trips.length === 0) { wrap.innerHTML = ""; wrap.classList.remove("active"); return; }
  wrap.classList.add("active");
  wrap.innerHTML = `
    <h3>Or try a multi-city trip</h3>
    <p class="sub">You've got ${state.days} days — enough to combine destinations.</p>
    <div class="multi-list">
      ${trips.map((t, i) => `
        <div class="multi-card" data-idx="${i}">
          <div class="multi-cities">
            ${t.cities.map(c => `<span class="multi-city-name"><span class="multi-flag">${c.flag}</span>${c.name}</span>`).join('<span class="multi-arrow">→</span>')}
          </div>
          <div class="multi-region">${t.region}</div>
          <p class="multi-pitch">${t.pitch}</p>
          <div class="tags">
            ${t.matches.map(tag => `<span class="tag">${labelFor(tag)}</span>`).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;
  wrap.querySelectorAll(".multi-card").forEach(el => {
    el.addEventListener("click", () => {
      const trip = trips[parseInt(el.dataset.idx, 10)];
      showMultiCityResult(trip);
    });
  });
}

function labelFor(id) {
  const a = ACTIVITIES.find(x => x.id === id);
  return a ? a.label : id;
}

// ---------- Comparison ----------
function renderComparison() {
  const top = state.ranked.slice(0, 3);
  const wrap = $("compare-grid");
  if (top.length === 0) { wrap.innerHTML = `<p class="sub">Nothing to compare yet.</p>`; return; }
  wrap.style.gridTemplateColumns = `repeat(${top.length}, minmax(0, 1fr))`;
  wrap.innerHTML = top.map((d, i) => {
    const status = monthStatus(d.bestMonths);
    return `
      <div class="compare-col" data-idx="${i}">
        <div class="compare-img" data-wiki="${d.wikiTitle}"><span class="img-flag">${d.flag}</span></div>
        <h3>${d.name}</h3>
        <div class="country">${d.country}</div>
        <dl class="compare-rows">
          <dt>Budget</dt><dd>${BUDGET_LABELS[d.budget].icon} ${BUDGET_LABELS[d.budget].label}</dd>
          <dt>Ideal length</dt><dd>${d.idealDays[0]}–${d.idealDays[1]} days</dd>
          <dt>Best months</dt><dd>${bestMonthsRange(d.bestMonths)}</dd>
          <dt>Right now</dt><dd><span class="season ${status}">${monthStatusLabel(status)}</span></dd>
          <dt>Matches</dt><dd>${d.matches.map(labelFor).join(", ") || "—"}</dd>
        </dl>
        <button class="primary compare-pick" data-idx="${i}">Pick ${d.name}</button>
      </div>
    `;
  }).join("");
  wrap.querySelectorAll(".compare-img").forEach(el => applyImage(el, el.dataset.wiki, "thumb"));
  wrap.querySelectorAll(".compare-pick").forEach(btn => {
    btn.addEventListener("click", () => showResult(top[parseInt(btn.dataset.idx, 10)]));
  });
}

// ---------- Result ----------
function showResult(dest) {
  state.lastDest = dest;
  const card = $("result-card");
  const matchedLabels = dest.matches ? dest.matches.map(labelFor).join(", ") : dest.tags.filter(t => state.selected.has(t)).map(labelFor).join(", ");
  const purposeList = [...state.purposes];
  const budget = BUDGET_LABELS[dest.budget];
  const status = monthStatus(dest.bestMonths);
  const fav = isFavorite(dest.name);
  const transport = TRANSPORT[state.transport];
  const matchedPurposes = purposeList.filter(p => p !== "other" && dest.purposes.includes(p));

  card.innerHTML = `
    <div class="result-hero" data-wiki="${dest.wikiTitle}"><span class="img-flag big">${dest.flag}</span></div>
    <h2>${dest.name}</h2>
    <div class="country">${dest.country}</div>
    <p class="desc">${dest.desc}</p>

    <div class="trip-summary">
      <div class="summary-item"><span class="summary-icon">📅</span><span>${state.days} day${state.days === 1 ? "" : "s"}</span></div>
      <div class="summary-item"><span class="summary-icon">${budget.icon}</span><span>${budget.label}</span></div>
      <div class="summary-item"><span class="summary-icon">${purposeList.map(p => PURPOSES[p].icon).join("")}</span><span>${purposeList.map(p => PURPOSES[p].label).join(", ")}</span></div>
      ${state.transport !== "any" ? `<div class="summary-item"><span class="summary-icon">${transport.icon}</span><span>${transport.label}</span></div>` : ""}
      ${state.origin && dest.flight ? `<div class="summary-item"><span class="summary-icon">📍</span><span>${dest.flight} from ${state.origin.name}</span></div>` : ""}
    </div>

    <div class="best-time">
      <span class="season ${status}">${monthStatusLabel(status)}</span>
      <span>Best months: ${bestMonthsRange(dest.bestMonths)}</span>
    </div>

    <div class="why"><strong>Why this fits:</strong> matches your love of ${matchedLabels || "the activities you picked"}${matchedPurposes.length ? `, and works well for a ${matchedPurposes.map(p => PURPOSES[p].label.toLowerCase()).join(" or ")}` : ""}.</div>
    <div class="duration-note">${durationNote(dest, state.days)}</div>

    <div class="result-actions">
      <button class="ghost fav-btn ${fav ? "active" : ""}" id="fav-btn">${fav ? "★ Saved" : "☆ Save"}</button>
      <button class="ghost" id="share-btn">🔗 Copy share link</button>
      <button class="primary" id="ai-btn">✨ Generate AI itinerary</button>
    </div>
    <div id="ai-output" class="ai-output"></div>
  `;
  applyImage($("result-card").querySelector(".result-hero"), dest.wikiTitle, "full");
  $("fav-btn").addEventListener("click", () => {
    toggleFavorite(dest.name);
    const isFav = isFavorite(dest.name);
    const btn = $("fav-btn");
    btn.classList.toggle("active", isFav);
    btn.textContent = isFav ? "★ Saved" : "☆ Save";
  });
  $("share-btn").addEventListener("click", () => copyShareLink(dest.name));
  $("ai-btn").addEventListener("click", () => generateItinerary(dest));
  goTo("step-result");
}

async function generateItinerary(dest) {
  const btn = $("ai-btn");
  const out = $("ai-output");
  btn.disabled = true;
  btn.textContent = "Generating…";
  out.classList.add("active");
  out.innerHTML = `<div class="ai-loading">Thinking through your trip<span class="dots"><span>.</span><span>.</span><span>.</span></span></div>`;

  try {
    const res = await fetch(`${WORKER_URL}/itinerary`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        destination: dest.name,
        country: dest.country,
        days: state.days,
        budget: dest.budget,
        purposes: [...state.purposes],
        transport: state.transport,
        origin: state.origin?.name,
      }),
    });

    if (!res.ok) {
      let msg = `HTTP ${res.status}`;
      try { const j = await res.json(); if (j.error) msg = j.error; } catch {}
      throw new Error(msg);
    }

    out.innerHTML = `<div class="ai-content"></div>`;
    const content = out.querySelector(".ai-content");
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buf = "";

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buf += decoder.decode(value, { stream: true });
      content.innerHTML = window.marked ? marked.parse(buf) : buf.replace(/</g, "&lt;");
    }

    state.itineraries[dest.name] = buf;
    btn.textContent = "✨ Regenerate";
  } catch (err) {
    out.innerHTML = `<div class="ai-error">Couldn't generate the itinerary: ${err.message}</div>`;
    btn.textContent = "✨ Try again";
  } finally {
    btn.disabled = false;
  }
}

function showMultiCityResult(trip) {
  const card = $("result-card");
  const purposeList = [...state.purposes];
  const allMatches = [...new Set(trip.cities.flatMap(c => c.tags.filter(t => state.selected.has(t))))];
  const perCity = Math.floor(state.days / trip.cities.length);

  card.innerHTML = `
    <div class="multi-hero">
      ${trip.cities.map(c => `<div class="multi-hero-img" data-wiki="${c.wikiTitle}"><span class="img-flag">${c.flag}</span></div>`).join("")}
    </div>
    <h2>${trip.cities.map(c => c.name).join(" + ")}</h2>
    <div class="country">${trip.region}</div>
    <p class="desc">${trip.pitch}</p>

    <div class="trip-summary">
      <div class="summary-item"><span class="summary-icon">📅</span><span>${state.days} days (~${perCity} per city)</span></div>
      <div class="summary-item"><span class="summary-icon">${purposeList.map(p => PURPOSES[p].icon).join("")}</span><span>${purposeList.map(p => PURPOSES[p].label).join(", ")}</span></div>
    </div>

    <div class="why"><strong>Why this combo:</strong> ${allMatches.length ? `together hits ${allMatches.map(labelFor).join(", ")}` : "the cities pair naturally and split the days nicely"}.</div>

    <div class="result-actions">
      <button class="ghost" data-next="step-options">Back to options</button>
    </div>
  `;
  card.querySelectorAll(".multi-hero-img").forEach(el => applyImage(el, el.dataset.wiki, "thumb"));
  card.querySelectorAll("[data-next]").forEach(b => b.addEventListener("click", () => goTo(b.dataset.next)));
  goTo("step-result");
}

function durationNote(dest, days) {
  const [min, max] = dest.idealDays;
  if (days < min) return `Heads up: most travelers spend ${min}–${max} days here. ${days} day${days === 1 ? "" : "s"} will feel rushed — stick to one base.`;
  if (days > max) return `You've got more time than the typical ${min}–${max} days here. Great chance to add a side trip.`;
  return `Your ${days} days is right in the sweet spot (${min}–${max}).`;
}

// ---------- Navigation ----------
function goTo(stepId) {
  document.querySelectorAll(".step").forEach(s => s.classList.remove("active"));
  $(stepId).classList.add("active");
  if (stepId === "step-options") renderOptions();
  if (stepId === "step-compare") renderComparison();
  if (stepId === "step-intro") renderFavorites();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-next]").forEach(btn => {
  btn.addEventListener("click", () => goTo(btn.dataset.next));
});

$("next-to-details-btn").addEventListener("click", () => goTo("step-details"));
$("find-btn").addEventListener("click", () => goTo("step-options"));
$("compare-btn").addEventListener("click", () => goTo("step-compare"));

$("surprise-btn").addEventListener("click", () => {
  if (state.ranked.length === 0) return;
  const top = state.ranked.slice(0, Math.min(3, state.ranked.length));
  const pick = top[Math.floor(Math.random() * top.length)];
  showResult(pick);
});

renderActivities();
setupDetails();
renderFavorites();
applyURLState();
