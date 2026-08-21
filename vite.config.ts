import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    // Use relative paths so assets load correctly on cPanel shared hosting (MochaHost)
    base: './',
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    build: {
      // Output to dist/ folder for upload to public_html
      outDir: 'dist',
      // Generate source maps for easier debugging (optional)
      sourcemap: false,
    },
  };
});
