# travelApp worker

Cloudflare Worker that proxies AI itinerary requests from the static site to the Anthropic API. Holds the Anthropic API key as a Cloudflare secret so it never reaches the browser.

## Deploy (one-time)

```sh
cd worker
npm install
npx wrangler login                          # opens browser, log in to Cloudflare
npx wrangler secret put ANTHROPIC_API_KEY   # paste key when prompted
npx wrangler deploy
```

After `deploy`, wrangler prints a URL like `https://travelapp-worker.<your-subdomain>.workers.dev`.

## Local dev

```sh
echo 'ANTHROPIC_API_KEY="sk-ant-..."' > .dev.vars
npx wrangler dev
```

`.dev.vars` is gitignored.

## Endpoint

`POST /itinerary` with JSON body:

```json
{
  "destination": "Bali",
  "country": "Indonesia",
  "days": 7,
  "budget": 2,
  "purposes": ["fun", "romantic"],
  "transport": "flight",
  "origin": "Toronto"
}
```

Response is `text/plain` streaming Markdown.
