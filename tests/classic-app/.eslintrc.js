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
        'testem.js',
        'config/**/*.js',
      ],
      excludedFiles: ['app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
    },
  ],
};
