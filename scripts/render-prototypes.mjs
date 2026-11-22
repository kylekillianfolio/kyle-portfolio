// Renders the HTML prototypes in design/prototypes/ to WebP images in public/work/.
// Uses a locally installed Chrome (or Edge) in headless mode, at 2x for sharp text.
// Run with: npm run prototypes
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

const root = resolve(import.meta.dirname, '..');
const srcDir = join(root, 'design', 'prototypes');
const outDir = join(root, 'public', 'work');
const WIDTH = 1280;
const HEIGHT = 800;

const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].filter(Boolean);
const browser = browsers.find((p) => existsSync(p));
if (!browser) throw new Error('No Chrome found. Set CHROME_PATH.');

mkdirSync(outDir, { recursive: true });
const tmp = join(tmpdir(), 'kk-prototypes');
mkdirSync(tmp, { recursive: true });

for (const file of readdirSync(srcDir).filter((f) => f.endsWith('.html'))) {
  const name = file.replace(/\.html$/, '');
  const png = join(tmp, `${name}.png`);
  rmSync(png, { force: true });
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=2',
    `--window-size=${WIDTH},${HEIGHT}`,
    '--virtual-time-budget=4000', // let Google Fonts load
    `--screenshot=${png}`,
    pathToFileURL(join(srcDir, file)).href,
  ]);
  await sharp(png).webp({ quality: 82 }).toFile(join(outDir, `${name}.webp`));
  await sharp(png).resize(WIDTH).webp({ quality: 82 }).toFile(join(outDir, `${name}-${WIDTH}.webp`));
  console.log(`Rendered ${name}.webp`);
}
