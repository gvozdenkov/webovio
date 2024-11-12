import { defineConfig } from 'vite';
import { resolve } from 'path';
import htmlPurge from 'vite-plugin-purgecss';

export default defineConfig({
  base: '/webovio-landing',
  root: resolve(__dirname, 'src'),
  build: {
    outDir: '../build',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  plugins: [htmlPurge()],
});
