# Rapid Acquisition Model (RAM) Website

A static, seven-page marketing site for the Rapid Acquisition Model, built to be
hosted on GitHub Pages and linked from Wix.

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

## Pages

| URL | File | Purpose |
|---|---|---|
| `/` | `index.html` | Landing: hero, overview video, what RAM is, audience routing, results, what sets RAM apart, marketplace preview, closing CTA |
| `/government/` | `government/index.html` | Government journey: "what do you need to do?" task cards, the 5-step government pathway, what government users gain |
| `/industry/` | `industry/index.html` | Industry journey: task cards, marketplace opportunity directory, the 5-step innovator pathway, submission guidance, submission FAQ |
| `/marketplaces/` | `marketplaces/index.html` | Marketplace directory, how marketplaces support acquisition, proven across government, recognition |
| `/about/` | `about/index.html` | The deeper model: faster starting point, what "awardable" means, U.S. acquisition authority, what sets RAM apart |
| `/resources/` | `resources/index.html` | Audience-sorted hub: government resources, industry resources, shared resources |
| `/contact/` | `contact/index.html` | Inquiry routing cards and the inquiry form |

`/the-model/` is kept as a redirect to `/about/` so previously shared links
still resolve.

Shared assets: `styles.css`, `script.js`, `assets/ram-logo.png`,
`assets/agencies/`.

## Site rules (Aug 2026 structure)

These are deliberate constraints from the content brief — please preserve them:

- **One primary navigation**, in this order: Home, For Government, For Industry,
  Marketplaces, About RAM, Resources, Contact. Mobile keeps the same order.
- **No global "Start a Submission" CTA.** A button label must describe its
  destination; don't use that label unless it opens a real submission mechanism.
- **Government and Industry CTAs never cross over.** Government CTAs route only
  to government content, Marketplaces, or Contact preselected to Government
  Engagement. Industry CTAs route only to industry content, marketplace
  opportunity pages, or Contact preselected to Innovator Submissions.
- **Don't repeat the five-step pathways** on Home, About RAM, or Resources. The
  government pathway lives on `/government/`, the innovator pathway on
  `/industry/`.
- **Homepage metrics are fixed**: Over $4B in awards; 85% nontraditional
  participation; 300% faster than traditional acquisition.
- **Don't link production users to the Wix prototype.**

### Contact preselection

Audience CTAs link to Contact with a query string, and `script.js` preselects
the matching inquiry type on load:

- `?type=government` → Government Engagement
- `?type=innovator` (or `industry`) → Innovator Submissions
- `?type=partnership` (or `general`) → Partnerships and General Questions
- `&subtype=<exact subtype text>` additionally preselects the subtype

Subtype options are defined in the `SUBTYPES` map in `script.js`. Partnerships
and General Questions has no subtypes, so that field hides itself.

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

- **Contact form**: wired to Web3Forms. `script.js` POSTs the form via `fetch`
  so the confirmation stays inline; the `action`/`method` on the `<form>` are
  the no-JS fallback. Submissions go to the inbox registered against the
  access key in `contact/index.html`. To change the destination, swap that
  access key. The key is a public client-side identifier by design — the form
  carries a honeypot field for spam, and Web3Forms can add hCaptcha if needed.
  **Not yet verified against a live submission.**
- **Recognition section**: the content brief asks that award titles, recipients,
  sponsoring organizations, and dates be verified before publishing. The cards
  in `marketplaces/index.html` are carried over from earlier content and have
  not been independently verified.
- **Government activity logos (the 160+)**: a scrolling strip of the activities
  that *engage* through a RAM marketplace is still pending the logo list.
- **Appian demo video**: needs a hosted URL before it can be embedded.
- **Marketplace card actions**: the brief allows up to two actions per card
  ("Government Access"/"Explore Solutions" and "Industry Opportunities"/"View
  Opportunity") *only where the destination supports them*. Each marketplace
  currently has one authoritative URL, so each card carries a single action.
  Add the second action per card once separate destinations are confirmed.
- **Logo asset**: the official lockup lives at `assets/ram-logo.png`
  (white-on-transparent, trimmed and downscaled for the web). Agency logos live
  in `assets/agencies/` — see the README there.

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
