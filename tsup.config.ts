import { defineConfig } from 'tsup';

const env = process.env.NODE_ENV;

export default defineConfig({
  entry: ['./src/index.ts'],
  splitting: true,
  clean: true,
  dts: true,
  minify: env === 'production',
  bundle: env === 'production',
  skipNodeModulesBundle: true,
  target: 'es2016',
  format: ['cjs', 'esm'],
  outDir: 'dist',
  external: ['esbuild'],
});
