// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://digital8.ca',
  vite: {
    plugins: [tailwind()],
  },
  integrations: [react()],
});