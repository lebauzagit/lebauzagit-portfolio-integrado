// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import brand from './src/config/brand.json' with { type: 'json' };

// https://astro.build/config
export default defineConfig({
  site: brand.profiles.portfolio.url,
  trailingSlash: 'always',
  legacy: { collections: true },
  i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es'],
	},
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()]
});
