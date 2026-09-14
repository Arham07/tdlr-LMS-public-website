/**
 * WCAG 2.1 AA contrast audit for the design tokens.
 *
 * Keep the values here in step with the @theme block in src/app/globals.css.
 * Run with `npm run check:contrast`.
 */
const T = {
  ground: '#F7F6F2',
  surface: '#FFFFFF',
  ink: '#0B1B33',
  muted: '#55627A',
  line: '#E3E1DA',
  'navy-900': '#06162E',
  'navy-700': '#0B2A55',
  'navy-500': '#1E4B8F',
  'navy-100': '#DCE5F2',
  'navy-50': '#EEF3FA',
  'gold-500': '#A97C1C',
  'gold-200': '#F1E3BD',
  'gold-100': '#FAF3E0',
  'teal-600': '#11736A',
  'teal-100': '#DCEFEB',
  white: '#FFFFFF',
};
const lin = (c) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
};
const lum = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
};
const ratio = (a, b) => {
  const [x, y] = [lum(T[a]), lum(T[b])].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// [foreground, background, purpose, minimum]
const PAIRS = [
  ['ink', 'ground', 'body and headings on the page', 4.5],
  ['ink', 'surface', 'body and headings on cards', 4.5],
  ['muted', 'ground', 'secondary text on the page', 4.5],
  ['muted', 'surface', 'secondary text on cards', 4.5],
  ['navy-700', 'ground', 'eyebrows and links', 4.5],
  ['navy-700', 'surface', 'links on cards', 4.5],
  ['navy-700', 'navy-50', 'nav hover, chips', 4.5],
  ['white', 'navy-700', 'primary button label', 4.5],
  ['white', 'navy-900', 'text on dark bands', 4.5],
  ['navy-100', 'navy-900', 'secondary text on dark bands', 4.5],
  ['gold-200', 'navy-900', 'eyebrow on dark bands', 4.5],
  ['teal-600', 'surface', 'seats-available chip text', 4.5],
  ['teal-600', 'teal-100', 'seats-available chip on its own tint', 4.5],
  ['ink', 'gold-100', 'class-rules note and callout', 4.5],
  ['ink', 'gold-200', 'placeholder tag text', 4.5],
  ['navy-500', 'ground', 'focus ring (non-text, needs 3:1)', 3],
  ['gold-500', 'surface', 'icons and rules (non-text, needs 3:1)', 3],
  ['gold-500', 'ground', 'icons and rules (non-text, needs 3:1)', 3],
  ['gold-500', 'navy-900', 'gold rule on dark (non-text, needs 3:1)', 3],
];
let fails = 0;
console.log('pair'.padEnd(34), 'ratio'.padStart(7), '  min   result   purpose');
for (const [fg, bg, purpose, min] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) fails++;
  console.log(
    `${fg} on ${bg}`.padEnd(34),
    r.toFixed(2).padStart(7),
    ` ${min.toFixed(1)}  ${ok ? 'PASS' : 'FAIL'}     ${purpose}`,
  );
}
console.log(
  fails === 0 ? '\nAll pairs meet their WCAG 2.1 AA minimum.' : `\n${fails} pair(s) FAILED.`,
);
process.exit(fails === 0 ? 0 : 1);
