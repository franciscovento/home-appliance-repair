import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://smartnestrepair.com',
  integrations: [
    tailwind(),
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
});
