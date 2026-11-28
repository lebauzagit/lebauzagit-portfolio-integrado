# Luis Bauza — Professional Portfolio
Astro 5 · Tailwind CSS 4 · TypeScript · MDX · EN/ES

Personal portfolio with bilingual project pages, original photography, and direct contact links.

## Local setup
Node 22.12+ and pnpm 10 recommended.
```powershell
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm test:build
pnpm dev
```
## Brand as Code
Edit `src/config/brand.json`, run `pnpm brand:generate`, and commit the updated files in `brand/generated/`. CI checks that regenerating them leaves the committed artifacts intact. `pnpm brand:validate` checks the identity and `pnpm brand:check-links` reports the HTTP status of the portfolio and social profiles. Social drafts are published manually. The X migration is pending.

## Deployment

The production URL is [lebauzagit.vercel.app](https://lebauzagit.vercel.app/). Use the Astro preset in Vercel with Node 22, the pnpm lockfile, `pnpm build`, and the `dist` output directory. `vercel.json` enforces trailing slashes on page routes. Astro generates the sitemap, robots file, and page metadata from the production URL in `src/config/brand.json`.

Verify the Vercel deployment before applying the legacy Netlify redirect. If Netlify still deploys automatically from the same branch, pause those deployments before releasing the Vercel changes. Check the two homepages, the eight project pages, the sitemap, `robots.txt`, and the social preview image. Then apply the permanent path-preserving redirect in `netlify.toml` to the old Netlify site and verify its root and a project URL. Update the website field on the GitHub repository and any manually maintained profiles that still point to Netlify.

Read [the initial audit](docs/INITIAL_AUDIT.md) and [status](docs/STATUS.md) for the remaining publication checks.
