# Deploying BlueGuardia as a Static Site

The site is now configured to build as a **fully static SPA** with prerendered
HTML for every page. The output works on any static host: Hostinger Business,
Vercel, Netlify, GitHub Pages, Cloudflare Pages, plain Apache/Nginx — no
Node.js runtime required at the host.

---

## 1. Build locally

You need Node.js 20+ and npm installed.

```bash
npm install
npm run build:static
```

This produces a `dist/client/` folder containing:

- `index.html` (homepage)
- `vision/index.html`, `contact/index.html`, `trainers/index.html`,
  `training/index.html`, `reviews/index.html`, `success-stories/index.html`
- `careers/soc-analyst/index.html`, `careers/pentester/index.html`
- An `assets/` folder with all CSS, JS, and images

**Only upload `dist/client/`** — the `dist/server/` folder is a build artifact
that is not used by static hosts.

---

## 2. Deploy to Hostinger Business (static)

You do **not** need the Node.js Selector for this. Use plain shared hosting.

1. Log in to **hPanel** → **Files → File Manager**.
2. Open the folder for your domain, e.g. `domains/yourdomain.com/public_html/`.
3. Delete any old files inside it (keep the folder itself).
4. Upload the **contents** of `dist/client/` (not the folder itself — upload
   `index.html`, `assets/`, `careers/`, etc. directly into `public_html/`).
5. Visit your domain. Done.

The `.htaccess` file at the project root is **only needed if you previously
set up the Node.js Selector**. For a pure static deploy you can delete it or
leave it — it has no effect on static files.

### Deep links on Hostinger

Because every route is prerendered as its own `index.html`, deep links like
`yourdomain.com/training` work natively — no SPA fallback config needed.

---

## 3. Deploy to Vercel

1. Push the project to GitHub.
2. Import the repo in Vercel.
3. Set the **Build Command** to `npm run build:static`.
4. Set the **Output Directory** to `dist/client`.
5. Deploy.

Vercel will pick up the prerendered HTML and serve every route correctly.

---

## 4. Deploy to Netlify

1. Push to GitHub and import the repo in Netlify.
2. Build command: `npm run build:static`
3. Publish directory: `dist/client`
4. Deploy.

---

## Updating the site later

Any time you change the site:

```bash
npm run build:static
```

Then re-upload the contents of `dist/client/` (or push to GitHub if using
Vercel/Netlify, which will rebuild automatically).

---

## Notes

- **The Lovable preview is unchanged** — `vite.config.ts` still builds for the
  in-Lovable Cloudflare preview as before.
- **No server runtime** — there is no Node, no Cloudflare Worker, no API at
  runtime. The Contact form is currently a client-side form; if you want it to
  actually send emails, wire it to a third-party service like Formspree,
  Web3Forms, or Getform (none require a backend on your side).
- **`vite.config.hostinger.ts` and `app.js`** are leftover from the earlier
  Node.js Selector setup. They are harmless to leave in the repo but are not
  used by the static build.
