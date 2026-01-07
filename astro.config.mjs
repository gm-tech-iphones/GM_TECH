import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // SUBSTITUA pela URL real onde o site será hospedado
  site: 'https://gm-tech-iphones.netlify.app/', 
  integrations: [
    tailwind(), 
    sitemap({
      filter: (page) => !page.includes('/404'), // Não indexar página de erro
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    })
  ],
});
