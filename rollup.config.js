import path from 'path';
import mkdirp from 'mkdirp';
import fs from 'fs';

import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
// import alias from 'rollup-plugin-alias';
import typescript from 'rollup-plugin-typescript2';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import svgSprite from 'rollup-plugin-svg-spritesheet';

// import sass from 'node-sass';
import autoprefixer from 'autoprefixer';
import postcss from 'rollup-plugin-postcss';
import packageJson from './package.json';

const paths = require('./config/paths');

const external = Object.keys(packageJson.peerDependencies);

function writeFile(filePath, contents) {
  mkdirp(path.dirname(filePath), err => {
    if (err) return false;

    fs.writeFile(filePath, contents, () => {
      console.log(`${filePath} successfuly created!`);
    });
    return true;
  });
}

export default {
  input: paths.entryPoint,
  output: {
    file: path.join(paths.outputPath, 'ui.esm.js'),
    format: 'esm',
  },
  plugins: [
    // alias({
    //   config: paths.appConfig,
    // }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      extensions: ['.ts', '.tsx', '.json'],
      preferBuiltins: false,
      customResolveOptions: {
        moduleDirectory: ['node_modules', paths.nodeModules, paths.src],
      },
    }),
    typescript({
      tsconfigDefaults: {
        compilerOptions: { declaration: true, jsx: 'react' },
      },
    }),
    commonjs({
      // namedExports: {
      //   'node_modules/react-is/index.js': ['isValidElementType'],
      // },
      exclude: [
        'react-day-picker/lib/**',
      ]
    }),
    json(),
    postcss({
      use: [
        [
          'sass',
          {
            includePaths: [paths.scss],
          },
        ],
      ],
      plugins: [autoprefixer],
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
      },
      sourceMap: true,
      minimize: true,
      extract: path.join(paths.outputPath, 'styles.css'),
      extensions: ['.css', '.scss'],
    }),
    svgSprite({
      output: code => {
        writeFile(path.join(paths.outputPath, 'spritesheet.svg'), code);
      },
    }),
  ],
  external,
};
