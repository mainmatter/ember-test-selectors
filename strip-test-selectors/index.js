let StripTestSelectors = require('./src/strip-test-selectors');
module.exports.transform = StripTestSelectors;
module.exports.baseDir = StripTestSelectors.baseDir;
module.exports.cacheKey = StripTestSelectors.cacheKey;

module.exports.stripDataTestPropertiesPlugin6Path = require.resolve(
  './src/strip-data-test-properties-plugin6'
);
