// @ts-check
import { defineConfig } from 'astro/config';

// Update `site` once the Vercel production URL is confirmed.
// It is used to build absolute URLs for canonical and Open Graph tags.
export default defineConfig({
  site: 'https://kyle-portfolio.vercel.app',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
