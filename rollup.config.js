import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/alertx.js',
    format: 'umd',
    name: 'Alertx'
  },
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-env']
    })
  ]
};
