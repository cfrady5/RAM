# Rapid Acquisition Marketplace (RAM) Website

A static, five-page marketing site for the Rapid Acquisition Marketplace, built to be
hosted on GitHub Pages and linked from Wix.

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Landing/gateway: hero + video, "what RAM is" BLUF, metrics strip, the two-pathway split, what makes RAM different, final CTA |
| `/the-model/` | `the-model/index.html` | The two pathways in depth: government 5-step process + value cards, innovator 5-step process + value cards, "awardable" explainer, U.S. acquisition authority |
| `/resources/` | `resources/index.html` | Submission pathway, documents & guides, featured links, submission FAQ |
| `/marketplaces/` | `marketplaces/index.html` | Marketplace ecosystem, proven across government, recognition |
| `/contact/` | `contact/index.html` | Contact path cards and inquiry form |

The home and final CTAs deep-link into the two pathways via
`the-model/#government` and `the-model/#innovators`.

Shared assets: `styles.css`, `script.js`, `assets/ram-logo.png`.

## Local preview

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. In the repo settings, go to **Pages**.
2. Set the source to **Deploy from a branch**, pick `main` and the `/ (root)` folder.
3. The site will be served at `https://<user>.github.io/RAM/`.

A `.nojekyll` file is included so Pages serves the files as-is. All internal
links are relative, so the site works at any base path (including a custom
domain pointed via CNAME, or linked from Wix).

## Known TODOs before launch

- **Contact form**: GitHub Pages is static, so the form currently shows a
  client-side confirmation only. Wire it to Formspree, a Wix CRM webhook, or a
  serverless endpoint (see the TODO in `script.js`).
- **Ecosystem email**: the three Contact path cards open a pre-addressed email
  via `mailto:`, but the address is a placeholder (`ecosystem@example.org`).
  Replace it with the real ecosystem inbox in `contact/index.html` (3 spots).
- **July 2026 awards**: three awards are pending (details from Courtney Baker).
  A placeholder comment marks where they go in `marketplaces/index.html`.
- **Government activity logos**: the "Proven Across Government" section notes
  160+ activities in text; a scrolling logo strip can be added once the logo
  list is available (from Chuck McMartin). Placeholder comment in place.
- **"Department of War" vs "Department of Defense"**: the content brief used
  "Department of Defense" in one place; the site standardizes on "Department of
  War" per prior direction. Flip if needed.
- **Logo asset**: the official lockup lives at `assets/ram-logo.png`
  (white-on-transparent, trimmed and downscaled for the web). If the logo is
  ever updated, replace that file — if it goes missing, the header and footer
  fall back to a text mark automatically.

## Design system

| Token | Value |
|---|---|
| Deep Navy | `#07122F` |
| Midnight | `#020713` |
| RAM Blue | `#2D6BFF` |
| Steel Blue | `#6E85A8` |
| Off White | `#F5F7FA` |
| Cool Gray | `#D9DEE8` |
| Signal Green | `#4AD295` |
| Headings | Space Grotesk |
| Body | Inter |
