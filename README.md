# PatioReseat (v1)

A static, English-language website about patio furniture replacement cushions. Built with [Eleventy 3](https://www.11ty.dev/). Working name: **PatioReseat**. The public site URL and path prefix are configurable via `SITE_URL` and `PATH_PREFIX` (see `src/_data/site.js` and `eleventy.config.js`). Defaults point at the GitHub Pages project site `https://good1uck.github.io/patioreseat/`.

The editorial rule is strict: **do not invent cushion dimensions or specs**. Link a public source for every brand or fabric claim. Furniture catalog width / depth / height is not a cushion size.

## Scripts

```bash
cd /workspace/cushion-site
npm install
# Local preview without the GitHub Pages prefix:
SITE_URL=http://localhost:8080 PATH_PREFIX=/ npm start
npm run build  # writes to _site/ (uses GitHub Pages defaults unless env is set)
```

Requires Node 18+. GitHub Actions builds with `SITE_URL=https://good1uck.github.io/patioreseat` and `PATH_PREFIX=/patioreseat`.

## How to add one page per night

1. Open a manufacturer or retailer page and take notes, including the URL and the date you checked it (America/New_York).
2. Pick a topic from `CONTENT-BACKLOG.md` and move it only when the page is actually written.
3. Create a Markdown file:

   - Brand or collection page: `src/brands/the-name.md`
   - Guide: `src/guides/the-name.md`

4. Use the existing front matter pattern:

```yaml
---
layout: brand.njk          # or guide.njk
tags: brand                # only for top-level brand guides
title: Collection name replacement cushions
shortName: Collection name # brand pages only
description: One sentence, specific, no invented facts.
permalink: /brands/the-name/
---
```

5. Write in English. Quote or paraphrase only what the source states. Add a “Sources” list of links at the bottom. Link to the parent brand page, `/guides/how-to-measure/`, and `/guides/fabrics/` where it helps.
6. If you add an affiliate URL, wrap it in the shortcode (still a placeholder until IDs exist):

```njk
{% affiliatePlaceholder "Cushion Mill custom cushions (placeholder link)", "https://cushionmill.com/" %}
```

7. Run `npm start` and click through on a phone-width window. Then `npm run build` and confirm the new URL is in `_site/sitemap.xml`.

Collection pages should live at URLs like `/brands/homecrest/anthem/` and link up to `/brands/homecrest/`. You can do that with `permalink` and in-body links; no extra config is required.

## Site map (v1)

- `/` — home
- `/guides/how-to-measure/`
- `/guides/fabrics/`
- `/about/` — includes the affiliate disclosure
- `/brands/` — index
- `/brands/brown-jordan/`
- `/brands/homecrest/`
- `/brands/crate-and-barrel/`
- `/sitemap.xml`, `/robots.txt`, `/404.html`

## Deploy

GitHub Actions (`.github/workflows/pages.yml`) builds Eleventy and deploys `_site/` to GitHub Pages. The live project URL is `https://good1uck.github.io/patioreseat/`.

To preview as it will appear on Pages:

```bash
SITE_URL=https://good1uck.github.io/patioreseat PATH_PREFIX=/patioreseat npm start
# then open http://localhost:8080/patioreseat/
```

When a custom domain is attached later, change `SITE_URL` and set `PATH_PREFIX=/` in the workflow (and in the local defaults if you want).

## License and trademarks

Site copy is written for PatioReseat. Brand and fabric names are used for identification; trademarks remain with their owners. The project is not affiliated with those companies.
