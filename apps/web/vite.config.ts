import { defineConfig, type PluginOption } from 'vite';
import react from '@vitejs/plugin-react';
import unocss from 'unocss/vite'
import icons from 'unplugin-icons/vite';
import { resolve } from 'path';

const dirname = import.meta.dirname;

export default defineConfig(() => ({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/web',
  server: {
    port: 4200,
    host: 'localhost',
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [react(), unocss(), icons({ compiler: 'jsx', autoInstall: true }) as PluginOption],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  test: {
    watch: false,
    globals: true,
    environment: 'jsdom',
    include: ['{src,tests}/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    reporters: ['default'],
    coverage: {
      reportsDirectory: './test-output/vitest/coverage',
      provider: 'v8' as const,
    },
  },
  resolve: {
    alias: {
      '@': resolve(dirname, 'src'),
    },
  },
}));
