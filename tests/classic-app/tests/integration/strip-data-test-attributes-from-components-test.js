import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import config from 'classic-app/config/environment';

module('StripTestSelectorsTransform plugin', function (hooks) {
  setupRenderingTest(hooks);

  if (config.stripTestSelectors) {
    test('it strips data-test-* attributes from components', async function (assert) {
      await render(hbs`{{print-test-attributes data-test-first="foobar"}}`);

      assert.dom('.data-test-first').hasText('', 'the data-test-first was stripped');
    });

    test('it strips data-test-* attributes from components in block form', async function (assert) {
      await render(
        hbs`{{#print-test-attributes data-test-first="foobar"}}hello{{/print-test-attributes}}`
      );

      assert.dom('.data-test-first').hasText('', 'the data-test-first was stripped');
    });

    test('it works with multiple data-test-* attributes on components', async function (assert) {
      await render(
        hbs`{{print-test-attributes data-test-first="foobar" data-test-second="second"}}`
      );

      assert.dom('.data-test-first').hasText('', 'the data-test-first was stripped');
      assert.dom('.data-test-second').hasText('', 'the data-test-second attribute was stripped');
    });

    test('it leaves other data attributes untouched, when a data-test-* attribute is present as well on components', async function (assert) {
      await render(hbs`{{print-test-attributes data-test-first="foobar" data-non-test="baz"}}`);

      assert.dom('.data-test-first').hasText('', 'the data-test-first was stripped');
      assert.dom('.data-non-test').hasText('baz', 'the data-non-test attribute was not stripped');
    });

    test('it leaves data-test attributes untouched on components', async function (assert) {
      await render(hbs`{{print-test-attributes data-test="foo"}}`);

      assert.dom('.data-test').hasText('foo', 'the data-test attribute was stripped');
    });

    test('it leaves other data attributes untouched on components', async function (assert) {
      await render(hbs`{{print-test-attributes data-non-test="foo"}}`);

      assert.dom('.data-non-test').hasText('foo', 'the data-non-test attribute was not stripped');
    });
  } else {
    test('it does not strip data-test-* attributes from components', async function (assert) {
      await render(hbs`{{print-test-attributes data-test-first="foobar"}}`);

      assert
        .dom('.data-test-first')
        .hasText('foobar', 'the data-test-first attribute was not stripped');
    });
  }
});
