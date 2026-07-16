# Tom Stephen — Athlete Website

A personal site built with React, Vite, React Router, and Tailwind CSS. Six pages: Home, About, Results,
Partners, Media, Contact. No backend/database — everything is static, plus a couple of small client-side-only
features (the contact form opens an email draft, the bio has a "download as .txt" button).

## Before you launch — 3 things to fix

1. **Email address.** `src/data/site.js` has `email: "hello@tomstephen.ca"` as a placeholder — it is **not**
   a real inbox. Search the file for `TODO(Tom)` and swap in your real address. It's used on the Contact
   and Media pages.
2. **Sponsor copy & logos.** The one-line blurb under each partner on the Partners page (and the equipment
   notes) are my draft descriptions, written from public info — run these past each sponsor before publishing,
   the same way you would with logo usage.
3. **Results accuracy.** Everything on the Results and About timeline was cross-checked against FIS,
   Nordiq Canada, Team Canada, and the press coverage you supplied, current as of when this was built (July
   2026). Give it one more read before launch in case anything's changed since.

## Project structure

```
src/
  data/site.js       <- ALL site copy, results, timeline, partners, links live here.
                        Edit this file for 90% of content changes — no need to touch components.
  pages/              One file per tab: Home, About, Results, Partners, Media, Contact
  components/         Navbar, Footer, Reveal (scroll animation), ElevationLine (the line-chart motif),
                       Lightbox (photo gallery), PageHeader
  assets/photos/      Your photos, already resized + compressed for web
  assets/logos/       Sponsor logos, cleaned up and padded consistently
public/
  favicon.svg         Simple "TS" mark — swap out any time
  og-image.jpg        Preview image used when the site is shared on social media / iMessage
```

To change any text, number, result, timeline entry, or partner blurb, start in `src/data/site.js`.

## Run it locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`). Changes hot-reload as you save.

To check exactly what will ship:

```bash
npm run build
npm run preview
```

## Deploying on Railway

The repo is already configured for Railway (`railway.json` + a `start` script that serves the production
build). Easiest path:

1. **Push this project to a GitHub repo** (Railway deploys from git):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   gh repo create tom-stephen-site --private --source=. --push
   ```
   (No GitHub CLI? Create an empty repo on github.com, then `git remote add origin <url>`,
   `git branch -M main`, `git push -u origin main`.)

2. **In Railway:** New Project → Deploy from GitHub repo → select the repo.

3. Railway auto-detects Node, runs `npm install`, then `npm run build` (because a `build` script exists),
   then `npm start`, which serves the compiled site on the port Railway assigns. You shouldn't need to touch
   any settings — but if you want to double check, Settings → Build should show builder `NIXPACKS`, and
   Settings → Deploy → Start Command should show `npm start`.

4. Railway will give you a `*.up.railway.app` URL. If you own **tomstephen.ca**, add it under
   Settings → Networking → Custom Domain, then point your DNS at the CNAME Railway gives you.

Every time you `git push`, Railway redeploys automatically.

## Notes on a couple of implementation choices

- **No blog / CMS**, as requested — the Media page's "download bio" button generates a `.txt` file entirely
  in the browser (no server involved). When you're ready for a blog, that's the natural point to add a
  database — happy to help with that when you get there.
- **Contact form** doesn't hit a server or database. Submitting it opens the visitor's email app with a
  pre-filled message addressed to you (a `mailto:` link built from the form fields). It works with zero
  backend, but it does depend on the visitor having an email client configured. If you'd rather have messages
  land in an inbox even when that's not the case, the standard next step is a form backend like Formspree or
  a small serverless function — straightforward to swap in later.
- **Fonts** (Space Grotesk, Inter, IBM Plex Mono) load from Google Fonts via `index.html`. They need normal
  internet access to load, which they'll have once this is live — nothing to configure.
