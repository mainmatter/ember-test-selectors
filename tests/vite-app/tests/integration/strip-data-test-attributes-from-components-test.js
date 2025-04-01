import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

// import config from 'classic-app/config/environment';

module('StripTestSelectorsTransform plugin', function (hooks) {
  setupRenderingTest(hooks);

  // eslint-disable-next-line no-constant-condition
  if (true) { /* config.stripTestSelectors */
    test('it strips data-test-* attributes from components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-test-first="foobar" />`);
      assert.dom('div').doesNotHaveAttribute('data-test-first');
    });

    test('it strips data-test-* attributes from components in block form', async function (assert) {
      await render(hbs`<ContentBlockGreeting data-test-first="foobar">hello</ContentBlockGreeting>`);
      assert.dom('div').doesNotHaveAttribute('data-test-first');
    });

    test('it works with multiple data-test-* attributes on components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-test-first="1st" data-test-second="2nd" />`);
      assert.dom('div').doesNotHaveAttribute('data-test-first');
      assert.dom('div').doesNotHaveAttribute('data-test-second');
    });

    test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-test-first="foobar" data-non-test="baz" />`);
      assert.dom('div').doesNotHaveAttribute('data-test-first');
      assert.dom('div').hasAttribute('data-non-test', 'baz');
    });

    test('it leaves data-test attributes untouched on components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-test="foo" />`);
      assert.dom('div').hasAttribute('data-test', 'foo');
    });

    test('it leaves other data attributes untouched on components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-non-test="foo" />`);
      assert.dom('div').hasAttribute('data-non-test', 'foo');
    });
  } else {
    test('it does not strip data-test-* attributes from components', async function (assert) {
      await render(hbs`<TemplateOnlyGreeting data-test-first="foobar" />`);
      assert.dom('div').hasAttribute('data-non-test', 'foo');
    });
  }
});
