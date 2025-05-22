const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');
const postcss = require('rollup-plugin-postcss');
const path = require('path');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/lib/gooey',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    format: ['esm'],
    assets: [{ input: '.', output: '.', glob: 'README.md' }],
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
      // postcss({
      //   extract: true, // 💡 emits CSS as a separate file
      //   minimize: false,
      //   extensions: ['.css'],
      // }),
    ],
  },
);
