import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const brand=JSON.parse(readFileSync(new URL('../src/config/brand.json',import.meta.url)));
assert.equal(brand.version,'1.0');assert.equal(brand.handle,'lebauzagit');
const portfolio = new URL(brand.profiles.portfolio.url);
assert.equal(brand.profiles.portfolio.url, portfolio.origin, 'portfolio must be a bare origin');
const profiles = { ...brand.profiles, ...brand.additionalProfiles };
for (const [name, profile] of Object.entries(profiles)) {
  assert.equal(new URL(profile.url).protocol, 'https:', name);
}
for (const name of ['github', 'linkedin', 'instagram', 'youtube']) {
  const handle = new URL(profiles[name].url).pathname.split('/').filter(Boolean).at(-1);
  assert.equal(handle?.replace(/^@/, ''), brand.handle, name);
}
assert.equal(brand.additionalProfiles.instagram.messageUrl, `https://ig.me/m/${brand.handle}`);
for (const [key, value] of Object.entries(brand.palette)) {
  assert.match(value, /^#[0-9a-f]{6}$/i, key);
}
for(const lang of ['en','es']){const identity=brand.identity[lang];for(const key of ['role','focus','tagline','hero','bio','about','headline','xbio'])assert.ok(identity[key]?.trim(),`${lang}.${key}`);assert.ok([...identity.xbio].length<=160);assert.ok([...identity.headline].length<=220);}
const ids=brand.stack.map(g=>g.id);assert.equal(new Set(ids).size,ids.length);const items=brand.stack.flatMap(g=>g.items);assert.equal(new Set(items).size,items.length);for(const name of ['JavaScript','TypeScript','Vue.js','C#','PHP'])assert.ok(items.includes(name));
console.log('Brand configuration validated.');
