# Status / handoff — version 1.0

## 2026-11-28

Aligned the English and Spanish AIMove Hub and AIMove Hub User Guide case studies with the CV's contributor framing. Revised descriptions, introductions, and cards to describe team context, frontend contributions, and web and mobile documentation. Removed unverified metrics and compliance claims from the case studies, retained existing images and routes, and linked the two projects within each language. All four pnpm checks passed, and verified the collaboration copy, project links, and screenshots in all four generated pages.

Prepared an English one-page, project-based CV and English and Spanish LinkedIn headline and About drafts. By the owner's direction, both AIMove projects describe collaborative contributions. The CV covers AIMove Hub, its web and mobile user guide, and YLG Studio Nails. Verified the PDF visually, checked all six embedded links, and opened the editable RTF for content verification. The files are local under `output/`.

After profile PR #1 was merged, added Astro to the header badges in [draft PR #2](https://github.com/lebauzagit/lebauzagit/pull/2). Astro already appears in the public README's frontend table. Verified the SVG badge and the one-line draft diff.

Opened [draft PR #1](https://github.com/lebauzagit/lebauzagit/pull/1) in the GitHub profile repository. It aligns the headline and introduction with the brand, replaces the old LinkedIn URL, adds the Vercel portfolio link, and lists Astro in the frontend stack. Verified the draft only changes the profile README. The profile repository's main branch, account bio, and website settings are unchanged.

Kept Projects selected in the top navigation on all localized Work detail pages. The build test checks the initial selection on both homepages and all eight project routes. Verified the selected background at the top, middle, and bottom of representative English and Spanish projects in Chrome on desktop and mobile. All four pnpm checks passed.

Rechecked the scroll highlight against public Vercel and the local build. Vercel still served the earlier navigation script, which left About active at the bottom. The local update now shares the active background across desktop and mobile, isolates it from hover and focus colors, and selects Contact once its midpoint enters the viewport. Chrome verified the actual background color while scrolling down and back up through all four sections in both languages and themes. All four pnpm checks passed. Deployment remains pending.

Fixed the top navigation scroll highlight on both homepages. Selection follows the visible section, restores Home on return to the top, and reaches a short Contact section once it fits in the viewport or the page reaches the bottom. Verified all four sections in Chrome in both languages at desktop and mobile widths, plus direct section links and keyboard focus. `pnpm test`, `pnpm check`, `pnpm build`, and `pnpm test:build` passed.

Verified the production Vercel deployment after the canonical update. Root `/robots.txt` and `/sitemap.xml` respond with HTTP 200. Requests with a trailing slash redirect to the file URLs with HTTP 308, and their `/es/` variants return HTTP 404. `/work/ylgstudio` redirects to the trailing-slash page. The robots file references the Vercel sitemap, which lists ten canonical URLs. The old Netlify URLs for robots and sitemap still return HTTP 404.

## 2026-11-27

The owner confirmed `https://lebauzagit.vercel.app` as the production origin. Astro configuration, canonical and alternate URLs, social metadata, JSON-LD, sitemap, generated robots file, and brand drafts use that origin. Prepared Vercel trailing-slash routing and a permanent path-preserving Netlify redirect. The README records the release order and live checks. The changes are local. Production deployment, the live Netlify redirect, and the GitHub homepage field remain pending.

Brand as Code now supplies the homepage portrait and the existing primary and dark-mode accent colors. CI checks all committed generated artifacts for drift and verifies all eight project routes, homepage links, and SEO output after building. Profile validation and HTTP checks now cover Instagram and YouTube. `pnpm test`, `pnpm check`, `pnpm build`, and `pnpm test:build` passed. The public link check returned 200 for five URLs and 301 for LinkedIn. Logo and banner artwork is still maintained manually. X remains pending in the brand configuration.

Audited hosting and Brand as Code. `lebauzagit.vercel.app` returns HTTP 200 for the English and Spanish homepages, both YLG Studio routes, `robots.txt`, the sitemap, and the social image. Vercel serves the sampled project route both with and without a trailing slash. GitHub records a successful Vercel deployment for `34275a6`, but the repository homepage points to a Vercel alias that returns HTTP 404. The live Vercel canonical, Open Graph image URL, robots sitemap reference, and sitemap entries still point to Netlify. The Netlify homepages return HTTP 200, while the tested YLG Studio routes, sitemap, robots file, and social image return HTTP 404 there. The canonical domain and hosting configuration await the owner's confirmation.

Brand as Code powers the bilingual identity, technology stack, social links, and SEO through `src/config/brand.json`. It generates text drafts for GitHub, LinkedIn, and X plus an identity JSON export. The visual assets, CSS colors, portrait references, and hosting configuration still have independently maintained values. CI exercises generation and checks one draft for repeatability. It does not compare all generated artifacts against Git, test expected portfolio routes, or check Instagram and YouTube links. The X migration remains pending. Local `pnpm test`, `pnpm check`, and `pnpm build` passed, and GitHub CI passed for `34275a6`.

Updated the YouTube channel link to the user-confirmed `@lebauzagit` handle in the brand configuration and generated identity. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified the new-tab link on all ten generated pages with navigation.

Updated external links in navigation, contact, the footer, and both YLG Studio pages to open in a new tab. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified 76 external links and 101 internal links across the 11 generated pages.

Replaced the FormSubmit contact form on both homepages with LinkedIn, Instagram messaging and profile links, and the GitHub profile. Updated the Instagram handle to the user-confirmed `lebauzagit` in the brand configuration and generated identity. Corrected English project links to `/#contact`. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified the localized contact links on both homepages and all eight generated project pages. Instagram chat delivery was not tested.

Expanded the English and Spanish YLG Studio Nails case studies in first person to highlight Astro development. Verified the shared TypeScript catalog, responsive WebP images, localized metadata, editorial routes, and mobile booking flow against the project's source. `pnpm test`, `pnpm check`, and `pnpm build` passed. Confirmed the six expanded cards, localized links, and themed image references in both generated pages.

Connected project card thumbnails, cover images, and embedded screenshots to the active portfolio theme using the existing light and dark assets. The system preference updates the theme live until a visitor chooses a theme. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified both variants in Chrome on the two homepages and eight project pages.

Standardized vertical spacing between text and image blocks across all English and Spanish project pages. The shared project styles also apply to card groups embedded in project bodies. `pnpm test`, `pnpm check`, and `pnpm build` passed, and all eight generated project pages include the shared spacing rules.

Reworked both YLG Studio Nails entries to follow the AIMove Hub case-study layout. The entries use `GenericCard` for a screenshot and six localized cards, with a responsive grid and links to the studio and portfolio contact section. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified both pages and the responsive grid rules in the build output.

Added trailing slashes to the project card links on both homepages. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified that all generated project URLs in the homepages, language switcher, metadata, and sitemap end in `/` and resolve to generated pages.

Replaced the English and Spanish YLG Studio Nails placeholders with a project summary based on the studio's public website, covering the gallery, service catalog, and external booking flow. Reused the existing portfolio images with localized alt text. `pnpm test`, `pnpm check`, and `pnpm build` passed. Verified the localized copy, official links, and image references in both generated project pages.

Restored the original Works grid from `fa79ad6` after `0789a4f` emptied the shared Astro component. `pnpm test`, `pnpm check`, and `pnpm build` passed. The generated English and Spanish homepages each render four localized project cards in the grid.

## Initial integration notes

Integration based on original archive. No external accounts modified. X target is pending, current URL retained. Instagram and YouTube require owner confirmation. Next: pnpm install --frozen-lockfile; pnpm test; pnpm check; pnpm build; pnpm dev. Fix any build errors before deploying. Check all six project routes, locale switch, theme, mobile navigation, contact delivery, keyboard access and SEO. Verify actual portrait/asset permission, claims in MDX and location/education before publishing. Add a verified résumé and articles only when supplied. Review palette/contrast and brand banners in browser. Registry unavailable in generation environment; Astro build and typecheck not verified. No live deployment performed.
