## Changes

### a) Trainers page (`src/routes/trainers.tsx`)

Replace the `trainers` array with two real entries (drop the third dummy trainer):

1. **Saif Ur Rehman** — Founder & Lead SOC Trainer
   - Copy uploaded `user-uploads://WhatsApp_Image_2026-05-16_at_10.12.30_AM.jpeg` → `src/assets/trainer-saif.jpg` and import it.
   - Certs: Microsoft Certified Security Operations Analyst Associate, CompTIA Security+ (In progress)
   - Experience + achievements as supplied by user.
   - Add a `featured: true` flag and render this card more prominently: larger photo column, a "FOUNDER" tag/badge, accent border (`border-primary/40`), and a "Founder" eyebrow label above the name. Keep the existing card markup for the other trainer.

2. **Harry Najam** — Lead Pentest Trainer
   - No real photo (anonymous). Render an anonymous placeholder block in place of the `<img>`: dark surface with a centered `UserRound` (lucide) icon + "Identity withheld by request" caption. Keep the same TRAINER_02 tag.
   - Certs + experience + achievements as supplied.

Image handling note: import the founder photo via `@/assets/...` (ES6 import), object-cover, keep the grayscale → color hover.

### b) Career path download buttons

- `src/routes/careers.soc-analyst.tsx` (lines 188-200): replace the two `href="#"` placeholders with the actual brochure links and add `download`, `target="_blank"`, `rel="noopener noreferrer"`:
  - Download Brochure → `/brochures/BlueGuardia-SOC-Brochure.pdf`
  - Training Outline → `/brochures/BlueGuardia-SOC-Course-Outline.pdf`
- `src/routes/careers.pentester.tsx` (lines 183-189): same treatment with:
  - Download Brochure → `/brochures/BlueGuardia-Pentesting-Brochure.pdf`
  - Training Outline → `/brochures/BlueGuardia-Pentesting-Course-Outline.pdf`

### c) MentorPanel cleanup (`src/components/MentorPanel.tsx`)

Remove the bottom "Certification stack our trainers hold" block — delete the entire `<div className="p-4 border-t border-border/60">…</div>` containing the `certs` chips, and remove the now-unused `certs` constant.

### Out of scope
No layout/visual changes elsewhere; PDFs already exist in `public/brochures/`.
