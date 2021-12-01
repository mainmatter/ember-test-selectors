module.exports = {
  root: true,
  extends: ['simplabs', 'simplabs/plugins/ember', 'plugin:prettier/recommended'],
  rules: {
    'ember/avoid-leaking-state-in-components': 'off',
    'ember/local-modules': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        '**/.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
    // node test files
    {
      files: ['node-tests/*.js'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        mocha: true,
        node: true,
      },
    },
  ],
};
