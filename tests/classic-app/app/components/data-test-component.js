import Component from '@ember/component';

export default Component.extend({
  // we're explicitly setting attributeBindings here to test that
  // we are correctly slice()ing the frozen array if it exists already
  attributeBindings: [],
});
