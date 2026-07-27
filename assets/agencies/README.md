# Agency logos

The "Proven Across Government" section on the Marketplaces page shows a logo for
each marketplace sponsor:

| File | Agency |
|---|---|
| `darpa.png` | Defense Advanced Research Projects Agency |
| `cdao.png` | Chief Digital and Artificial Intelligence Office |
| `air-force.png` | Department of the Air Force |
| `aal.png` | Army Applications Laboratory |
| `iarpa.png` | Intelligence Advanced Research Projects Activity |

If a file is missing, that card falls back to the agency name as text, so the
section never looks broken.

## Replacing or adding a logo

Each file is a white-on-transparent mark centred on a **1000 × 400 (2.5:1)
transparent canvas**. That uniform canvas is what keeps every logo the same
size in the grid — the CSS renders each image at full cell width, so a logo
supplied at its own native aspect ratio will render larger or smaller than its
neighbours.

To add one, trim the transparent margins off the source, scale it to fit inside
roughly 920 × 328, and centre it on a 1000 × 400 transparent canvas. Save as an
optimized PNG (these land around 40–75 KB each).

- **Colour**: the section sits on deep navy, so white or light monochrome
  versions read best. If only a full-colour seal is approved, the card can be
  given a white chip behind the logo instead — ask and it can be styled that way.
- **Approval**: only use official logo files cleared for public use. Do not
  recreate or approximate government seals.
