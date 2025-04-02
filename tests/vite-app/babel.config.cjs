const {
  babelCompatSupport,
  templateCompatSupport,
} = require('@embroider/compat/babel');

const { stripPropertiesPlugin } = require('strip-test-selectors');

const falsyValues = ['false', '0', 'no', 'off'];
const STRIP = process.env.STRIP_TEST_SELECTORS
  ? !falsyValues.includes(process.env.STRIP_TEST_SELECTORS)
  : process.env.NODE_ENV === 'production';

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
          ...(STRIP ? ['strip-test-selectors'] : []),
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
    ...(STRIP ? [stripPropertiesPlugin()] : []),
  ],

  generatorOpts: {
    compact: false,
  },
};
