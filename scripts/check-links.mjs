import { readFileSync } from 'node:fs';

const brand = JSON.parse(readFileSync(new URL('../src/config/brand.json', import.meta.url)));
const profiles = { ...brand.profiles, ...brand.additionalProfiles };
const timeout = Number(process.env.LINK_TIMEOUT_MS || 15000);

function describeStatus(status) {
  if (status === 401 || status === 403) return 'authentication/access restricted';
  if (status === 429) return 'rate limited';
  if (status === 404 || status === 410) return 'not found';
  if (status >= 300 && status < 400) return 'redirect';
  if (status >= 200 && status < 300) return 'HTTP success (identity not verified)';
  return 'inconclusive';
}

for (const [name, { url }] of Object.entries(profiles)) {
  try {
    const response = await fetch(url, { redirect: 'manual', signal: AbortSignal.timeout(timeout) });
    console.log(name, response.status, describeStatus(response.status));
    await response.body?.cancel();
  } catch (error) {
    console.log(name, 'network unavailable or timeout', error.message);
  }
}
