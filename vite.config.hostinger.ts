// Build config for Hostinger Business (Node.js Selector / Passenger).
// Use: npm run build:hostinger
// This produces a Node server bundle in .output/ instead of a Cloudflare Worker.
// The Lovable preview keeps using vite.config.ts (unchanged).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  cloudflare: false,
  tanstackStart: {
    target: "node-server",
  },
});
