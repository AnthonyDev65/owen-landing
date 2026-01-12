// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: 'lightningcss',
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['astro']
          }
        }
      }
    }
  },

  // Cambiar por tu URL de Vercel
  site: 'https://owenmusic.vercel.app/',

  compressHTML: true,

  build: {
    inlineStylesheets: 'auto'
  },

  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },

  adapter: vercel()
});