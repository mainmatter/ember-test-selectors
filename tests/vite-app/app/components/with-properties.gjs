import Component from '@glimmer/component';

export default class WithProperties extends Component {
  foo = 'foo';
  'data-test' = 'test';
  'metadata-test-foo' = 'metadata';
  'data-test-foo' = 'foo';
  'data-test-foobar' = () => {
    return `${this['data-test-foo']}bar`
  };

  <template>
    <aside>
      <p data-test-greeting-from-with-properties>Hello from GJS with properties!</p>
      <ul>
        <li>{{this.foo}}</li>
        <li>{{this.data-test}}</li>
        <li>{{this.metadata-test-foo}}</li>
        <li>{{this.data-test-foo}} (should not show if <code>stripPropertiesPlugin</code> is used)</li>
        <li>{{this.data-test-foobar}} (should not show if <code>stripPropertiesPlugin</code> is used)</li>
      </ul>
    </aside>
  </template>
}