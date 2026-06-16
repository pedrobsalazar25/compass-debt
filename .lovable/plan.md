# Migrate deployment to Vercel

## Goal
Let Vercel build and serve this TanStack Start app (frontend + server functions + Supabase integration) so it works at your `vercel.app` URL instead of 404'ing.

## Why it's 404ing today
The project's Vite config (`@lovable.dev/vite-tanstack-config`) is wired for Cloudflare Workers. When Vercel runs `vite build`, it produces a Cloudflare Worker bundle (`dist/server`, `dist/client`), which Vercel doesn't know how to serve — so every route returns `404: NOT_FOUND`.

The Lovable wrapper already supports overriding the Nitro preset *outside* the Lovable sandbox, so we can hard-pin it to `vercel` for Vercel builds without breaking your Lovable preview/publish.

## Changes

### 1. `vite.config.ts` — pin Nitro preset to `vercel`
```ts
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: { server: { entry: "server" } },
  // Inside the Lovable sandbox this is ignored (Cloudflare is forced).
  // On Vercel CI it produces a Vercel-compatible build in .vercel/output.
  nitro: { preset: "vercel" },
});
```

### 2. `package.json` — ensure `nitro` is a devDependency
The wrapper imports `nitro/vite` only when needed; on Vercel CI it must be installable. Add `nitro` to devDependencies if it isn't already.

### 3. Vercel project settings (done in Vercel dashboard, not in code)
- **Framework preset:** Other
- **Build command:** `bun run build` (or `npm run build`)
- **Output directory:** `.vercel/output` (Nitro's Vercel preset writes the Build Output API v3 here; Vercel auto-detects it, but set explicitly if asked)
- **Install command:** `bun install` (or default)
- **Node version:** 20.x

### 4. Environment variables in Vercel → Settings → Environment Variables
Copy these from Lovable (Project Settings → Secrets / Cloud):

Client-visible (must keep `VITE_` prefix):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `VITE_SUPABASE_PROJECT_ID`

Server-only:
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `LOVABLE_API_KEY` (if you use Lovable AI server functions)
- any other custom secrets your server functions read via `process.env`

Apply to all environments (Production, Preview, Development).

### 5. After first deploy — verify
- Home route loads (no 404)
- A page that calls a server function works (auth, data fetch)
- A protected `_authenticated/*` route redirects properly
- Supabase admin operations (if any) succeed in Vercel function logs

## Things I'm NOT doing
- No `vercel.json` — Nitro's `vercel` preset emits the Build Output API directly; a hand-written `vercel.json` would conflict.
- Not deleting any Cloudflare files (there are no `wrangler.toml` / worker entry to delete in this project — Cloudflare config is internal to the Lovable wrapper).
- Not touching server function code, Supabase client wiring, or routes — all of that is runtime-agnostic and works on Vercel's Node runtime.

## What you'll still need to do manually
Steps 3 and 4 happen in the Vercel dashboard — I can't do them from here. I'll handle steps 1 and 2 in the code.

## Caveat
Your Lovable preview and `compass-debt.lovable.app` will continue to work exactly as today (the wrapper forces Cloudflare inside the Lovable sandbox regardless of this setting). The `vercel` preset only takes effect when Vercel runs the build.
