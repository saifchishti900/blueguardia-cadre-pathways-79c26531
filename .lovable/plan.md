
User wants Node.js Selector deploy on Hostinger Business. Keep visuals identical. Need to:

1. Switch Vite/TanStack Start preset from Cloudflare Workers → `node-server`. The `@lovable.dev/vite-tanstack-config` wrapper currently bakes in `cloudflare`. I need to override it. Looking at the config: `defineConfig()` from that wrapper. I'll need to pass overrides — based on TanStack Start docs, the preset is set via `tanstackStart({ target: 'node-server' })`. Since the wrapper auto-includes the plugin, the cleanest path is to switch from the wrapper to a vanilla Vite config OR pass an override if supported.

2. Remove/ignore `wrangler.jsonc` (rename to `.bak` or delete).

3. Update `package.json` scripts: add `start` script that runs the built node server (`node .output/server/index.mjs`), and ensure `build` produces node output.

4. Add `app.js` wrapper (Passenger entry) that imports `.output/server/index.mjs` — Hostinger Node Selector needs a startup file at project root.

5. Add `DEPLOY-HOSTINGER.md` with: build locally → upload `.output/`, `app.js`, `package.json`, `package-lock.json` → set Node Selector startup file `app.js`, app root, Node 20 → run NPM Install → restart.

6. Visuals: zero changes to any `src/` page/component/style.

Concerns: the `@lovable.dev/vite-tanstack-config` wrapper hardcodes the cloudflare plugin. It accepts overrides via `defineConfig({ vite: {...} })` but the TanStack Start preset target may not be overridable. Worst case I bypass the wrapper for production builds via an env flag, OR write a parallel `vite.config.node.ts` used only for the Hostinger build. That keeps the Lovable preview working unchanged.

Plan: dual-config approach — keep `vite.config.ts` for Lovable preview, add `vite.config.hostinger.ts` for the Node build. Add `build:hostinger` script.

Keep plan short.
