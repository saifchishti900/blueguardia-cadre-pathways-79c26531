# Deploying BlueGuardia to Hostinger Business (Node.js)

This guide deploys the site to Hostinger Business shared hosting using the
**Node.js Selector** (Passenger). Visuals and behavior are identical to the
Lovable preview — only the server runtime changes from Cloudflare Workers to
Node.js.

---

## 1. Build locally (on your computer)

You need Node.js 20+ and npm installed.

```bash
npm install
npm run build:hostinger
```

This produces a `.output/` folder containing the Node server bundle and all
static assets. The original `npm run build` (Cloudflare) is untouched.

### Test the production build locally (optional but recommended)

```bash
npm start
```

Then open http://localhost:3000 — you should see the same site as the Lovable
preview. Stop with `Ctrl+C` when done.

---

## 2. Prepare the upload

Create a zip of these items at the project root:

- `.output/` (the entire folder)
- `app.js`
- `.htaccess`
- `package.json`
- `package-lock.json` (if it exists; otherwise skip)

Do **not** upload `node_modules/`, `src/`, `.git/`, or `dist/` — Hostinger will
install dependencies for you.

---

## 3. Upload to Hostinger

1. Log in to **hPanel** → select your domain.
2. Open **Files → File Manager**.
3. Navigate to the folder you want the app to live in. Common choices:
   - `domains/yourdomain.com/public_html/` — to serve at the root domain
   - `domains/yourdomain.com/public_html/app/` — to serve at `/app`
4. Upload the zip and **Extract** it in place.

---

## 4. Create the Node.js app in hPanel

1. In hPanel, go to **Advanced → Node.js**.
2. Click **Create Application**.
3. Fill in:
   - **Node.js version:** `20.x` (latest LTS available)
   - **Application mode:** `Production`
   - **Application root:** the folder you uploaded to (e.g. `public_html`)
   - **Application URL:** your domain (or subdomain)
   - **Application startup file:** `app.js`
4. Click **Create**.

---

## 5. Install dependencies

In the same Node.js panel for your app:

1. Click **Run NPM Install**. Wait for it to finish (1–3 minutes).
2. Click **Restart** application.

---

## 6. Verify

Open your domain in a browser. You should see the BlueGuardia homepage with
the same animations, cards, and layout as the Lovable preview.

If you see a 502 or "Application failed to start":

- Open the Node.js panel → check **Application logs** for the real error.
- Most common cause: a step above was skipped. Re-run **NPM Install** and
  **Restart**.
- Make sure `app.js` is at the application root (not inside `.output/`).

---

## Updating the site later

Whenever you change the site in Lovable:

1. Pull the latest code locally (or re-export from Lovable).
2. `npm run build:hostinger` again.
3. Re-upload `.output/` (you can delete the old one first via File Manager).
4. In the Node.js panel, click **Restart**.

You don't need to re-run NPM Install unless `package.json` changed.

---

## Notes

- **Cold starts:** Shared Node hosting puts the app to sleep after inactivity.
  The first request after a quiet period may take 2–5 seconds. This is a
  Hostinger Business limitation, not the app.
- **The Lovable preview still works** — `vite.config.ts` is unchanged, so the
  in-Lovable preview keeps building for Cloudflare Workers as before.
- **`wrangler.jsonc`** is harmless to leave in the project; it's only read if
  you explicitly run `wrangler deploy`.
