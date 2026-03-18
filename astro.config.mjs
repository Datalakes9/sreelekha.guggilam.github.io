import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // FIX: Match these to your GitHub URL
  site: 'https://datalakes9.github.io',
  base: '/sreelekha.guggilam.github.io/',
  output: 'static',
  integrations: [tailwind()],
  // Ensure we don't have the old '@astrojs/image' block here
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
  },
});