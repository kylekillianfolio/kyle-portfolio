// Generates guilloché patterns (the fine interlaced line-work on banknotes and
// certificates) as small SVGs in public/patterns/.
//
// Each pattern is ONE mathematical curve drawn once in <defs>, then repeated with
// <use> and a small rotation or offset. The overlapping copies produce the moiré.
// That keeps files a few KB instead of hundreds.
//
// Run with: npm run guilloche
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const publicDir = fileURLToPath(new URL('../public/patterns/', import.meta.url));
mkdirSync(publicDir, { recursive: true });

const r1 = (n) => Math.round(n * 10) / 10;
const pathFrom = (pts) => 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L') + 'Z';

// Polar "wavy ring": radius oscillates k times around the circle.
function ring({ cx, cy, base, amp, k, amp2 = 0, k2 = 0, steps = 400 }) {
  const pts = [];
  for (let i = 0; i < steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = base + amp * Math.sin(k * t) + amp2 * Math.sin(k2 * t);
    pts.push([Math.round(cx + r * Math.cos(t)), Math.round(cy + r * Math.sin(t))]);
  }
  return pathFrom(pts);
}

// A rosette: several wavy rings, each repeated `copies` times with a small rotation.
function rosette({ size, rings, stroke, width = 0.6 }) {
  const c = size / 2;
  const defs = [];
  const uses = [];
  rings.forEach((ringSpec, i) => {
    const id = `r${i}`;
    defs.push(`<path id="${id}" d="${ring({ cx: c, cy: c, ...ringSpec })}"/>`);
    const step = 360 / ringSpec.k / ringSpec.copies;
    for (let j = 0; j < ringSpec.copies; j++) {
      uses.push(`<use href="#${id}" transform="rotate(${r1(j * step)} ${c} ${c})"/>`);
    }
  });
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" fill="none" stroke="${stroke}" stroke-width="${width}" aria-hidden="true">
<defs>${defs.join('')}</defs>${uses.join('')}</svg>`;
}

// A banknote band: one compound wave, repeated with phase offsets and mirrored,
// so the lines braid across the strip. Designed to tile horizontally.
function band({ width, height, period, copies, stroke, strokeWidth = 0.6 }) {
  const mid = height / 2;
  const a = height * 0.34;
  const pts = [];
  // Draw two extra periods on each side so offsets never show an end.
  for (let x = -2 * period; x <= width + 2 * period; x += 2) {
    const t = (x / period) * Math.PI * 2;
    pts.push([x, mid + a * Math.sin(t) * 0.75 + a * 0.25 * Math.sin(3 * t)]);
  }
  const d = 'M' + pts.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L');
  const uses = [];
  for (let j = 0; j < copies; j++) {
    const dx = r1((j / copies) * period);
    uses.push(`<use href="#w" transform="translate(${dx} 0)"/>`);
    uses.push(`<use href="#w" transform="translate(${dx} ${height}) scale(1 -1)"/>`);
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none" fill="none" stroke="${stroke}" stroke-width="${strokeWidth}" aria-hidden="true">
<defs><path id="w" d="${d}"/></defs>${uses.join('')}</svg>`;
}

const AMBER = '#F2A93B';

// The seal shows at ~150px, a fifth of its 800-unit drawing. Fine engraving lines
// would be ~0.2px there and blur into noise, so the seal gets its own rosette:
// two rings, fewer copies, and ~5-unit strokes (about 1px on screen). Both rings
// sit outside the center disk (radius ~215) that holds the text.
const sealRings = [
  { base: 345, amp: 38, k: 12, copies: 5 },
  { base: 262, amp: 40, k: 9, copies: 4 },
];

// Only the patterns the site uses:
//   rosette.svg  the award seal on the hero portrait (small <img>)
//   band.svg     banknote band framing the impact strip (CSS background)
const files = {
  [publicDir + 'rosette.svg']: rosette({ size: 800, rings: sealRings, stroke: AMBER, width: 5.5 }),
  [publicDir + 'band.svg']: band({ width: 480, height: 72, period: 96, copies: 8, stroke: AMBER, strokeWidth: 1.2 }),
};

for (const [path, svg] of Object.entries(files)) {
  writeFileSync(path, svg);
  console.log(`${path.split(/[\/]/).slice(-3).join('/')}  ${(svg.length / 1024).toFixed(1)} KB`);
}
