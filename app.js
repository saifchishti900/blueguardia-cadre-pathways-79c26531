// Hostinger Node.js Selector (Passenger) entry point.
// Passenger requires a startup file at the application root. This file boots
// the TanStack Start Node server that `npm run build:hostinger` produces in
// .output/server/index.mjs.
//
// Passenger sets process.env.PORT — the TanStack Start node-server preset
// reads PORT automatically, so no extra wiring is needed.
import("./.output/server/index.mjs").catch((err) => {
  console.error("Failed to start BlueGuardia server:", err);
  process.exit(1);
});
