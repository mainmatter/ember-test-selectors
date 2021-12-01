'use strict';

/* eslint-env node */

let TEST_SELECTOR_PREFIX = /data-test-.*/;

function isTestSelector(attribute) {
  return TEST_SELECTOR_PREFIX.test(attribute);
}

module.exports = function () {
  return {
    name: 'strip-test-selectors',

    visitor: {
      ElementNode(node) {
        node.attributes = node.attributes.filter(attribute => !isTestSelector(attribute.name));
      },

      MustacheStatement(node) {
        node.params = node.params.filter(param => !isTestSelector(param.original));
        node.hash.pairs = node.hash.pairs.filter(pair => !isTestSelector(pair.key));
      },

      BlockStatement(node) {
        node.params = node.params.filter(param => !isTestSelector(param.original));
        node.hash.pairs = node.hash.pairs.filter(pair => !isTestSelector(pair.key));
      },
    },
  };
};

module.exports.baseDir = function () {
  return __dirname;
};

module.exports.cacheKey = function () {
  return 'strip-test-selectors';
};
