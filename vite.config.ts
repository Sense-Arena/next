import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic',
    }),
    dts({
      outputDir: path.resolve(__dirname, 'dist/types'),
      entryRoot: path.resolve(__dirname, 'src/index.ts'),
      afterDiagnostic: console.debug,
      skipDiagnostics: false,
      copyDtsFiles: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'NEXT',
      formats: ['es', 'umd'],
      fileName: format => `@sa-next.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies), 'next/image', 'next/head'],
      output: {
        globals: {
          '@react-spring/web': 'SpringWeb',
          '@sensearena/ui': 'SAUI',
          react: 'React',
          'react-dom': 'ReactDOM',
          next: 'Next',
          'next/image': 'NextImg',
          'next/head': 'NextHead',
        },
      },
    },
  },
});
