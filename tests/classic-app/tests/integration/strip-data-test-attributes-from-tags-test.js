import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import config from 'classic-app/config/environment';

module('StripTestSelectorsTransform plugin', function (hooks) {
  setupRenderingTest(hooks);

  if (config.stripTestSelectors) {
    test('it strips data-test-* attributes from HTML tags', async function (assert) {
      await render(hbs`<span data-test-id="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-test-id="my-id"]').doesNotExist('data-test-id is stripped');
    });

    test('it works with multiple data-test-* attributes on HTML tags', async function (assert) {
      await render(hbs`<span data-test-first data-test-second="second-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-test-first]').doesNotExist('data-test-first is stripped');
      assert.dom('span[data-test-second="second-id"]').doesNotExist('data-test-second is stripped');
    });

    test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on HTML tags', async function (assert) {
      await render(hbs`<span data-id="my-id" data-test-id="my-test-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-id="my-id"]').exists('data-id is not stripped');
      assert.dom('span[data-test-id="my-test-id"]').doesNotExist('data-test-id is stripped');
    });

    test('it leaves data-test attributes untouched on HTML tags', async function (assert) {
      await render(hbs`<span data-test="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-test="my-id"]').exists('data-test-id is not stripped');
    });

    test('it leaves other data attributes untouched on HTML tags', async function (assert) {
      await render(hbs`<span data-id="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-id="my-id"]').exists('data-id is not stripped');
    });
  } else {
    test('it does not strip data-test-* attributes from HTML tags', async function (assert) {
      await render(hbs`<span data-test-id="my-id" ></span>`);

      assert.dom('span').exists('the span is present');
      assert.dom('span[data-test-id="my-id"]').exists('data-test-id is not stripped');
    });
  }
});
