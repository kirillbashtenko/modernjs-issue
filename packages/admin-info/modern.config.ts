import moduleTools, { defineConfig } from '@modern-js/module-tools';
import runtime from '@modern-js/runtime/cli';

export default defineConfig({
  plugins: [moduleTools(), runtime()],
  buildConfig: [
    {
      format: 'esm',
      target: 'es6',
      buildType: 'bundle',
      outDir: './dist/',
    },
    {
      buildType: 'bundle',
      outDir: './dist/types',
      dts: {
        only: true,
      },
    },
  ],
});
