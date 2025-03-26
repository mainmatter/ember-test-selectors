module.exports = {
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2017,
  },
  extends: [
    'simplabs/configs/ember-qunit',
    'simplabs/plugins/qunit',
    'plugin:prettier/recommended',
  ],
};
