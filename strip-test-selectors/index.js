let StripTestSelectors = require('./src/strip-test-selectors');
module.exports = StripTestSelectors;

let StripTestSelectorsProperties = require('./src/strip-data-test-properties-plugin6');
module.exports.stripPropertiesPlugin = StripTestSelectorsProperties;

module.exports.stripDataTestPropertiesPlugin6Path = require.resolve(
  './src/strip-data-test-properties-plugin6'
);
