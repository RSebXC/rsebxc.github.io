import assert from 'node:assert/strict';
import { access, readFile, stat } from 'node:fs/promises';
import { resolve } from 'node:path';

// Verify the generated output, including URLs used by repository-based Pages.
const root = resolve('dist');
const html = await readFile(resolve(root, 'index.html'), 'utf8');
const base = new URL(
  process.env.SITE_URL || 'https://rsebxc.github.io/',
).pathname.replace(/\/$/, '');
assert.match(html, /<html[^>]*lang="es"/);
assert.equal(
  (html.match(/<h1[\s>]/g) || []).length,
  1,
  'Exactly one h1 is required.',
);
assert.equal(
  (html.match(/class="project-card(?: project-featured)?"/g) || []).length,
  6,
  'All six projects must be rendered.',
);
for (const name of [
  'description',
  'og:title',
  'og:description',
  'og:image',
  'og:image:alt',
  'twitter:card',
]) {
  assert.ok(html.includes(`="${name}"`), `Missing metadata: ${name}`);
}
assert.ok(
  html.includes('application/ld+json'),
  'Person structured data is required.',
);
assert.ok(!html.includes('tel:'), 'No public telephone links.');
const ids = new Set(
  [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]),
);
for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g))
  assert.ok(ids.has(anchor), `Missing anchor: ${anchor}`);

const local = [...html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)].map(
  (match) => match[1],
);
for (const pathname of new Set(local)) {
  assert.ok(
    pathname.startsWith(`${base}/`),
    `URL does not respect base: ${pathname}`,
  );
  const relative = decodeURIComponent(pathname.slice(base.length + 1));
  await access(resolve(root, relative || 'index.html'));
}
for (const file of [
  'CV_Rodrigo_Castro_Aguilar.pdf',
  'images/rodrigo-castro.webp',
  'images/og-rodrigo-castro.jpg',
  'favicon.svg',
  'robots.txt',
  'sitemap.xml',
]) {
  assert.ok(
    (await stat(resolve(root, file))).size > 0,
    `Empty or missing file: ${file}`,
  );
}
const sitemap = await readFile(resolve(root, 'sitemap.xml'), 'utf8');
assert.ok(
  sitemap.includes(
    `${new URL(process.env.SITE_URL || 'https://rsebxc.github.io/').origin}${base}/`,
  ),
);
console.log(
  `Static output verified: 6 projects, metadata, anchors, assets and base path "${base || '/'}".`,
);
