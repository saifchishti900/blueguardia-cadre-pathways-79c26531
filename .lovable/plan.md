## Goal
Make the "Course Outline" and "Brochure" buttons on `/training` actually download the four uploaded PDFs (SOC + Pentester).

## Steps

1. **Copy PDFs into `public/brochures/`** (so they're served as static files at `/brochures/...` on every host — Lovable preview, Vercel, and the static Hostinger build):
   - `public/brochures/BlueGuardia-SOC-Course-Outline.pdf`
   - `public/brochures/BlueGuardia-SOC-Brochure.pdf`
   - `public/brochures/BlueGuardia-Pentesting-Course-Outline.pdf`
   - `public/brochures/BlueGuardia-Pentesting-Brochure.pdf`

2. **Update `src/routes/training.tsx`**:
   - Add `outline` and `brochure` URL fields to each entry in the `tracks` array, pointing to the files above (SOC for `id: "soc"`, Pentesting for `id: "pen"`).
   - Replace the two `href="#"` placeholders with `href={t.outline}` and `href={t.brochure}`.
   - Add `download` and `target="_blank" rel="noopener"` so clicking saves the file (and opens in a new tab if the browser previews PDFs).

## Out of scope
- No visual/layout changes.
- No changes to other pages or to the static/Hostinger build configs (PDFs in `public/` are picked up automatically by all three build modes).
