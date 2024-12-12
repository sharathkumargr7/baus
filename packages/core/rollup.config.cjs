const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');
const { dts } = require('rollup-plugin-dts');
const postcss = require('rollup-plugin-postcss');
const image = require('@rollup/plugin-image');
const peerDepsExternal = require('rollup-plugin-peer-deps-external');
const svgr = require('@svgr/rollup');

const packageJson = require('./package.json');

/** @type {import('rollup').RollupOptions[]} */
const config = [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.svg']
      }),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      svgr({
        typescript: true,
        ref: true
      }),
      postcss({
        extract: true,
        modules: false,
        use: ['sass'],
        extensions: ['.scss', '.css'],
        minimize: true,
        inject: false
      }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/@mui\/material/, /@emotion/, /\.scss$/]
  },
];

module.exports = config; 