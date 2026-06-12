# Rapid Acquisition Model (RAM) Website

A static, single-page marketing site for the Rapid Acquisition Model, built to be
hosted on GitHub Pages and linked from Wix.

## Stack

Plain HTML, CSS, and vanilla JavaScript — no build step, no dependencies.

- `index.html` — all page sections and copy
- `styles.css` — design system and responsive layout
- `script.js` — sticky header, mobile menu, scroll reveals, metric count-up, FAQ, form handling

## Local preview

Open `index.html` directly in a browser, or serve it:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to GitHub Pages

1. In the repo settings, go to **Pages**.
2. Set the source to **Deploy from a branch**, pick the branch (e.g., `main`) and the `/ (root)` folder.
3. The site will be served at `https://<user>.github.io/RAM/`.

A `.nojekyll` file is included so Pages serves the files as-is.

## Linking from Wix

Either link directly to the GitHub Pages URL from Wix navigation/buttons, or
point a custom domain/subdomain (e.g., `ram.yourdomain.com`) at GitHub Pages via
a CNAME record and link to that.

## Known TODOs before launch

- **Contact form**: GitHub Pages is static, so the form currently shows a
  client-side confirmation only. Wire it to Formspree, a Wix CRM webhook, or a
  serverless endpoint (see the TODO in `script.js`).
- **Marketplace "Learn More" links**: currently anchor to the contact section;
  swap in real marketplace URLs (Tradewinds, DARPA ERIS, Platform One) once
  approved for public use.
- **Logo asset**: the header and footer load the official lockup from
  `assets/ram-logo.png`. Add the logo file at that exact path (PNG, ideally
  trimmed of excess whitespace). Until the file exists, the site shows a text
  fallback automatically. A version with a transparent background also works —
  the logo is displayed on a white chip either way so the navy/gray lockup
  stays readable on the dark header.
- **Org logos**: the "Applied Across Government" section uses text cards;
  swap in official logos only if usage is approved.

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
