import Component from '@ember/component';

const component = Component.extend();

component.reopenClass({
  positionalParams: 'params',
});

export default component;
