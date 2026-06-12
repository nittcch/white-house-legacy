// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// When deploying outside the Lovable sandbox (e.g. Vercel), force-enable
// Nitro and let it pick a preset. Vercel sets the `VERCEL` env var, which
// Nitro auto-detects to produce a `.vercel/output` build (Build Output API).
// On any other host, fall back to a static-friendly node-server preset.
const nitroPreset = process.env.NITRO_PRESET
  || (process.env.VERCEL ? "vercel" : undefined);

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: nitroPreset ? { preset: nitroPreset } : true,
});
