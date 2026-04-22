// Static build config for any host (Hostinger, Vercel, Netlify, GitHub Pages,
// or plain Apache/Nginx). Produces a fully static SPA in `dist/` — no Node
// server required at runtime.
//
// Use: npm run build:static
//
// What this does:
// - Disables the Cloudflare Workers plugin (target was Workers in dev preview).
// - Enables TanStack Start SPA mode + prerender, which crawls all routes and
//   emits a static .html for each one. This means deep links work even on
//   hosts without an SPA fallback configured.
// - Emits the static site to ./dist (Vite default).
//
// The Lovable preview keeps using vite.config.ts (unchanged).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        enabled: true,
        crawlLinks: true,
        outputPath: "/index.html",
      },
      maskPath: "/",
    },
  },
});
