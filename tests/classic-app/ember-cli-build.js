'use strict';

/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let stripTestSelectors = process.env['STRIP_TEST_SELECTORS'];

  let app = new EmberApp(defaults, {
    'ember-cli-babel': {
      throwUnlessParallelizable: true,
    },

    'ember-test-selectors': {
      strip: Boolean(stripTestSelectors),
    },
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  const { maybeEmbroider } = require('@embroider/test-setup');
  return maybeEmbroider(app);
};
