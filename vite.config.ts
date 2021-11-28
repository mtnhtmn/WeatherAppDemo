import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteFonts from 'vite-plugin-fonts';
import reactSvgPlugin from 'vite-plugin-react-svg';

// https://vitejs.dev/config/
export default defineConfig({
  mode:'development',
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: ['Overpass'],
      },
    }),
    reactSvgPlugin(),
  ],
  build: {
    sourcemap: true,
  },

});
