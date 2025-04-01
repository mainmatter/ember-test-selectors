const {
  babelCompatSupport,
  templateCompatSupport,
} = require('@embroider/compat/babel');

const { stripPropertiesPlugin } = require('strip-test-selectors');
 
module.exports = {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        compilerPath: 'ember-source/dist/ember-template-compiler.js',
        enableLegacyModules: [
          'ember-cli-htmlbars',
          'ember-cli-htmlbars-inline-precompile',
          'htmlbars-inline-precompile',
        ],
        transforms: [
          ...templateCompatSupport(),
          //process.env.NODE_ENV === 'production' ? 'strip-test-selectors': ''
          'strip-test-selectors'
        ],
      },
    ],
    [
      'module:decorator-transforms',
      {
        runtime: {
          import: require.resolve('decorator-transforms/runtime-esm'),
        },
      },
    ],
    [
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: __dirname,
        useESModules: true,
        regenerator: false,
      },
    ],
    ...babelCompatSupport(), 
    stripPropertiesPlugin(),
  ],

  generatorOpts: {
    compact: false,
  },
};
