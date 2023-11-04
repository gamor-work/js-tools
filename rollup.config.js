const nodeResolve = require('@rollup/plugin-node-resolve')
const { terser } = require('rollup-plugin-terser')
const babel = require('rollup-plugin-babel')
const typescript2 = require('rollup-plugin-typescript2')

module.exports = {
  input: './src/index.ts',
  output: [
    {
      file: 'lib/cjs/index.js',
      format: 'cjs',
    },
    {
      file: 'lib/esm/index.js',
      format: 'esm',
    },
  ],
  plugins: [
    nodeResolve({
      extensions: ['.ts', '.js'],
    }),
    // 使用 rollup-plugin-terser 进行代码混淆
    // terser(),
    // 使用 babel.config.js 的配置
    babel(),
    typescript2(),
  ],
}
