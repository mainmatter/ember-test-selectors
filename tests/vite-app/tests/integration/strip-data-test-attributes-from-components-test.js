import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
  'StripTestSelectorsTransform plugin > from components',
  function (hooks) {
    setupRenderingTest(hooks);

    /*
     * These tests assert the behavior when data-test-* selectors are stripped.
     * The conditions to strip data-test-* depend on the Babel configuration.
     * In the present app, we strip when Vite does a production build or if STRIP_TEST_SELECTORS is explicitly true.
     * It means part of the tests in this modules fail in dev mode (http://localhost:4200/tests/), this is expected.
     */
    module('it strips', function () {
      test('it strips data-test-* attributes from components', async function (assert) {
        await render(hbs`<TemplateOnlyGreeting data-test-first="foobar" />`);
        assert.dom('div').doesNotHaveAttribute('data-test-first');
      });

      test('it strips data-test-* attributes from components in block form', async function (assert) {
        await render(
          hbs`<ContentBlockGreeting data-test-first="foobar">hello</ContentBlockGreeting>`,
        );
        assert.dom('div').doesNotHaveAttribute('data-test-first');
      });

      test('it works with multiple data-test-* attributes on components', async function (assert) {
        await render(
          hbs`<TemplateOnlyGreeting data-test-first="1st" data-test-second="2nd" />`,
        );
        assert.dom('div').doesNotHaveAttribute('data-test-first');
        assert.dom('div').doesNotHaveAttribute('data-test-second');
      });

      test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', async function (assert) {
        await render(
          hbs`<TemplateOnlyGreeting data-test-first="foobar" data-non-test="baz" />`,
        );
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
    });

    /*
     * These tests assert the behavior when data-test-* selectors are kept.
     * The conditions to strip data-test-* depend on the Babel configuration.
     * In the present app, we keep when Vite does a dev build or if STRIP_TEST_SELECTORS is explicitly false.
     */
    module('it keeps', function () {
      test('it does not strip data-test-* attributes from components', async function (assert) {
        await render(hbs`<TemplateOnlyGreeting data-test-first="foobar" />`);
        assert.dom('div').hasAttribute('data-test-first', 'foobar');
      });
    });
  },
);
