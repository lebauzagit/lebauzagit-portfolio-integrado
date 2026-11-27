# Luis Bauza — Professional Portfolio
Astro 5 · Tailwind CSS 4 · TypeScript · MDX · EN/ES

Integrated edition of the original portfolio, not a replacement template. Original project pages, photographs, styles and contact form are preserved.

## Local setup
Node 22.12+ and pnpm 10 recommended.
```powershell
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm dev
```
## Brand as Code
Edit `src/config/brand.json` then run `pnpm brand:generate`. Drafts appear in `brand/generated/`. `pnpm brand:validate` checks identity and `pnpm brand:check-links` reports HTTP status without assuming blocked links are missing. X migration pending. No automatic social publishing.
## Deployment
Netlify publishes `dist` with `pnpm build`. Confirm canonical domain and contact form delivery before publishing. Read `docs/INITIAL_AUDIT.md` and `docs/STATUS.md` for limitations and next steps. Existing project images and claims must be reviewed for permission and accuracy.
