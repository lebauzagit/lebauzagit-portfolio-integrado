// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://lebauzagit.netlify.app',
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