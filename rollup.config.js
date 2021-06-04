import babel from '@rollup/plugin-babel'
import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
//import resolve from '@rollup/plugin-node-resolve'
//import commonjs from '@rollup/plugin-commonjs'

export default [
  {
    input: 'src/index.ts',
    plugins: [
      //resolve(),
      //commonjs(),
      typescript(),
      babel()
    ],
    output: [
      {  file: pkg.main, format: 'cjs' },
      {  file: pkg.module, format: 'es' },
      {  file: pkg.browser, format: 'umd',name:"VueClass" ,
        globals: {
          "vue-class-component": "VueClassComponent"
        }
      },
    ]
  }
]
