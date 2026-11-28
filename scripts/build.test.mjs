import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import test from 'node:test';

const brand = JSON.parse(readFileSync(new URL('../src/config/brand.json', import.meta.url)));
const dist = new URL('../dist/', import.meta.url);
const origin = brand.profiles.portfolio.url;
const socialImage = new URL('/brand/social.png', origin).href;
const expectedProjects = ['aimove-guide', 'aimove-saas', 'brotherst', 'ylgstudio'];

function readOutput(path) {
  return readFileSync(new URL(path, dist), 'utf8');
}

function checkPage(path, englishPath, currentLocation) {
  const html = readOutput(`.${path}index.html`);
  const canonical = new URL(path, origin).href;
  const english = new URL(englishPath, origin).href;
  const spanish = new URL(`/es${englishPath}`, origin).href;

  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), path);
  assert.ok(html.includes(`<link rel="alternate" hreflang="en" href="${english}"`), path);
  assert.ok(html.includes(`<link rel="alternate" hreflang="es" href="${spanish}"`), path);
  assert.ok(html.includes(`<meta property="og:url" content="${canonical}"`), path);
  assert.ok(html.includes(`<meta property="og:image" content="${socialImage}"`), path);
  const jsonLd = html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);
  assert.equal(JSON.parse(jsonLd?.[1] ?? '{}').url, origin, path);
  const selectedLinks = html.matchAll(/<a\b(?=[^>]*\bclass="link")(?=[^>]*\baria-current="location")[^>]*\bhref="([^"]+)"/g);
  assert.deepEqual(Array.from(selectedLinks, ([, href]) => href), [currentLocation], path);
  return html;
}

test('both homepages link to all four localized projects with canonical SEO', () => {
  for (const prefix of ['', '/es']) {
    const home = checkPage(`${prefix}/`, '/', `${prefix}/#home`);
    assert.ok(home.includes(`src="${brand.avatar}"`), prefix || '/');
    for (const slug of expectedProjects) {
      const englishPath = `/work/${slug}/`;
      const localizedPath = `${prefix}${englishPath}`;
      assert.ok(home.includes(`href="${localizedPath}"`), localizedPath);
      checkPage(localizedPath, englishPath, `${prefix}/#projects`);
    }
  }
});

test('robots, sitemap, and social image agree with the production origin', () => {
  const robots = readOutput('robots.txt');
  assert.ok(robots.includes(`Sitemap: ${new URL('/sitemap.xml', origin).href}`));
  assert.ok(existsSync(new URL('brand/social.png', dist)));

  const xml = readOutput('sitemap.xml');
  const entries = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => new URL(url));
  const paths = new Set(entries.map(url => url.pathname));
  for (const url of entries) assert.equal(url.origin, origin);
  for (const prefix of ['', '/es']) {
    assert.ok(paths.has(`${prefix}/`));
    for (const slug of expectedProjects) {
      assert.ok(paths.has(`${prefix}/work/${slug}/`));
    }
  }
});

test('hosting configuration preserves the canonical project paths', () => {
  const vercel = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url)));
  assert.equal(vercel.trailingSlash, true);
  const netlify = readFileSync(new URL('../netlify.toml', import.meta.url), 'utf8');
  assert.ok(netlify.includes(`to = "${origin}/:splat"`));
});
