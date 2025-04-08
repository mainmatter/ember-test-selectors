import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('StripTestSelectorsTransform plugin > from tags', function (hooks) {
  setupRenderingTest(hooks);

  /*
   * These tests assert the behavior when data-test-* selectors are stripped.
   * The conditions to strip data-test-* depend on the Babel configuration.
   * In the present app, we strip when Vite does a production build or if STRIP_TEST_SELECTORS is explicitly true.
   * It means part of the tests in this modules fail in dev mode (http://localhost:4200/tests/), this is expected.
   */
  module('it strips', function () {
    test('it strips data-test-* attributes from HTML tags', async function (assert) {
      await render(hbs`<span data-test-id="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert
        .dom('span[data-test-id="my-id"]')
        .doesNotExist('data-test-id is stripped');
    });

    test('it works with multiple data-test-* attributes on HTML tags', async function (assert) {
      await render(
        hbs`<span data-test-first data-test-second="second-id" ></span>`,
      );

      assert.dom('span').exists('the span is present');
      assert
        .dom('span[data-test-first]')
        .doesNotExist('data-test-first is stripped');
      assert
        .dom('span[data-test-second="second-id"]')
        .doesNotExist('data-test-second is stripped');
    });

    test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on HTML tags', async function (assert) {
      await render(
        hbs`<span data-id="my-id" data-test-id="my-test-id" ></span>`,
      );

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-id="my-id"]').exists('data-id is not stripped');
      assert
        .dom('span[data-test-id="my-test-id"]')
        .doesNotExist('data-test-id is stripped');
    });

    test('it leaves data-test attributes untouched on HTML tags', async function (assert) {
      await render(hbs`<span data-test="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert
        .dom('span[data-test="my-id"]')
        .exists('data-test-id is not stripped');
    });

    test('it leaves other data attributes untouched on HTML tags', async function (assert) {
      await render(hbs`<span data-id="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-id="my-id"]').exists('data-id is not stripped');
    });
  });

  /*
   * These tests assert the behavior when data-test-* selectors are kept.
   * The conditions to strip data-test-* depend on the Babel configuration.
   * In the present app, we keep when Vite does a dev build or if STRIP_TEST_SELECTORS is explicitly false.
   */
  module('it keeps', function () {
    test('it does not strip data-test-* attributes from HTML tags', async function (assert) {
      await render(hbs`<span data-test-id="my-id" ></span>`);
      assert.dom('span').exists('the span is present');
      assert
        .dom('span[data-test-id="my-id"]')
        .exists('data-test-id is not stripped');
    });
  });
});
