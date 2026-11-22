// Generates the Open Graph share image and PNG favicons into /public.
// Run with: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = (name) => fileURLToPath(new URL(`../public/${name}`, import.meta.url));

const NAVY = '#0E1A2B';
const AMBER = '#F2A93B';
const HEADING = '#F5F7FA';
const BODY = '#C9D3E0';
const FONT = "'Space Grotesk', 'Segoe UI', Arial, sans-serif";

const og = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${NAVY}"/>
  <rect x="80" y="80" width="56" height="6" fill="${AMBER}"/>
  <text x="80" y="140" font-family="${FONT}" font-size="26" font-weight="600" letter-spacing="2" fill="${AMBER}">AGENTIC AI · PRODUCT LEADERSHIP · B2B SAAS</text>
  <text font-family="${FONT}" font-size="64" font-weight="700" fill="${HEADING}">
    <tspan x="80" y="260">Building AI into manufacturing</tspan>
    <tspan x="80" y="340">software, and into how product</tspan>
    <tspan x="80" y="420">teams work.</tspan>
  </text>
  <circle cx="92" cy="530" r="12" fill="${AMBER}"/>
  <text x="120" y="541" font-family="${FONT}" font-size="34" font-weight="700" fill="${HEADING}">Kyle Killian</text>
  <text x="340" y="541" font-family="${FONT}" font-size="28" fill="${BODY}">Senior Product Owner</text>
</svg>`;

const icon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" fill="${NAVY}"/>
  <circle cx="32" cy="32" r="13" fill="${AMBER}"/>
</svg>`;

// Apple touch icons should not be rounded or transparent; iOS applies its own mask.
const touch = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180">
  <rect width="180" height="180" fill="${NAVY}"/>
  <circle cx="90" cy="90" r="36" fill="${AMBER}"/>
</svg>`;

await sharp(Buffer.from(og)).png().toFile(out('og-image.png'));
await sharp(Buffer.from(icon)).resize(32, 32).png().toFile(out('favicon-32.png'));
await sharp(Buffer.from(touch)).resize(180, 180).png().toFile(out('apple-touch-icon.png'));

console.log('Wrote og-image.png, favicon-32.png, apple-touch-icon.png');
