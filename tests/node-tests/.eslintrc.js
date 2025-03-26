module.exports = {
  root: true,
  extends: ['simplabs', 'plugin:prettier/recommended'],
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 2015,
  },
  env: {
    browser: false,
    mocha: true,
    node: true,
  },
};
