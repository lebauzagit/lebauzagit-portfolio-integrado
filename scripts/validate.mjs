import {readFileSync} from 'node:fs';
import assert from 'node:assert/strict';
const brand=JSON.parse(readFileSync(new URL('../src/config/brand.json',import.meta.url)));
assert.equal(brand.version,'1.0');assert.equal(brand.handle,'lebauzagit');
for(const [name,p] of Object.entries(brand.profiles)){assert.equal(new URL(p.url).protocol,'https:',name);if(name!=='x')assert.ok(p.url.includes(brand.handle),name);}
for(const lang of ['en','es']){const identity=brand.identity[lang];for(const key of ['role','focus','tagline','hero','bio','about','headline','xbio'])assert.ok(identity[key]?.trim(),`${lang}.${key}`);assert.ok([...identity.xbio].length<=160);assert.ok([...identity.headline].length<=220);}
const ids=brand.stack.map(g=>g.id);assert.equal(new Set(ids).size,ids.length);const items=brand.stack.flatMap(g=>g.items);assert.equal(new Set(items).size,items.length);for(const name of ['JavaScript','TypeScript','Vue.js','C#','PHP'])assert.ok(items.includes(name));
console.log('Brand configuration validated.');
