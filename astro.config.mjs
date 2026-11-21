// @ts-check
import { defineConfig } from 'astro/config';

// Production URL on Vercel.
// It is used to build absolute URLs for canonical and Open Graph tags.
export default defineConfig({
  site: 'https://kyle-portfolio-rosy.vercel.app',
  output: 'static',
  build: { inlineStylesheets: 'always' },
});
