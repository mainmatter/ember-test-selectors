strip-test-selectors
==============================================================================

Enabling better element selectors in [Ember.js](http://emberjs.com) tests

> [!NOTE]
> ember-test-selectors monorepo was written and is maintained by [Mainmatter](https://mainmatter.com) and contributors.
> We offer consulting, training, and team augmentation for Ember.js – check out our [website](https://mainmatter.com/ember-consulting/) to learn more!

Features
------------------------------------------------------------------------------

strip-test-selectors provides Babel plugins to strip `data-test-*` selectors from your templates and objects:

- Removes attributes starting with `data-test-` from HTML tags and component/helper invocations in your templates.

- Removes properties starting with `data-test-` from your JS objects like component classes.

More information on why that is useful are available on our
[blog](http://mainmatter.com/blog/2016/03/04/ember-test-selectors.html)!


Compatibility
------------------------------------------------------------------------------

In an Embroider+Vite app:

- Ember 3.28 or above
- Ember CLI 4.12 or above
- Node.js 18 or above

If your Ember app is a classic app, you can use [ember-test-selectors](https://github.com/mainmatter/ember-test-selectors/blob/master/ember-test-selectors/README.md) classic addon, which supports Ember 3.8 to Ember 4.12.


Installation
------------------------------------------------------------------------------

```bash
pnpm add -D strip-test-selectors
```

Usage
------------------------------------------------------------------------------

In your templates, you can use `data-test-*` attributes and get them removed from `production` builds by configuring Babel (see next section):

```hbs
<article>
  <h1 data-test-post-title data-test-resource-id={{post.id}}>{{post.title}}</h1>
  <p>{{post.body}}</p>
  <button data-test-like-button>Like</button>
</article>
```

Once you've done that you can use attribute selectors to look up and interact
with those elements:

```js
assert.dom('[data-test-post-title]').hasText('Ember is great!');

await click('[data-test-like-button]');
```

### Usage with Components

You can use the same syntax also for component invocations:

```hbs
<Spinner @color="blue" data-test-spinner>
```

Inside the `Spinner` component template the `data-test-spinner` attribute will
be applied to the element that has `...attributes` on it, or on the component
wrapper `div` element if you don't use `tagName = ''`.


### Usage in Ember addons

If you want to use ember-test-selectors in an addon make sure that it appears
in the `dependencies` section of the `package.json` file, not in the
`devDependencies`. This ensures that the selectors are also stripped correctly
even if the app that uses the addon does not use ember-test-selectors itself.

Configuration
------------------------------------------------------------------------------

In an Embroider+Vite app, you are responsible for the Babel configuration of your app. Therefore, it's up to you to configure the conditions for `strip-test-selectors` to run. Here is a minimalist example to strip data-test-* for production build with an environment variable (which reproduces the behavior of the classic addon):

`package.json`:

```json
"scripts": {
  "build": "STRIP_TEST_SELECTORS=true vite build",
  "test": "vite build --mode test && ember test --path dist"
}
```

`babel.config.cjs`:

```js
const { stripPropertiesPlugin } = require('strip-test-selectors');

module.exports = {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        compilerPath: 'ember-source/dist/ember-template-compiler.js',
        enableLegacyModules: [...],
        transforms: [
          ...templateCompatSupport(),
          // AST Transform for templates:
          // The default export of strip-test-selectors is the plugin that strips
          // data-test-* from ember templates.
          ...(process.env.STRIP_TEST_SELECTORS ? ['strip-test-selectors'] : []),
        ],
      },
    ],
    ...babelCompatSupport(),
    // JS plugin:
    // This is the additional plugin exported by strip-test-selectors that strips
    // data-test-* from JS component properties. You don't have to import it and 
    // configure it if you don't need this behavior.
    ...(process.env.STRIP_TEST_SELECTORS ? [stripPropertiesPlugin()] : []),
  ],
};
```

If you prefer not to customize the commands in `package.json` with specific environment variables, there are other ways to achieve the same thing using what already exists in `process.env`. For instance, you can read Vite ["mode" and "NODE_ENV"](https://vite.dev/guide/env-and-mode#modes). Here is an example that uses [minimist](https://www.npmjs.com/package/minimist) to access the `mode` argument:

```js
// babel.config.cjs

const { mode } = require('minimist')(process.argv.slice(2));
const STRIP = process.env.NODE_ENV === 'production' && mode !== 'test';

module.exports = {
  plugins: [
    [
      'babel-plugin-ember-template-compilation',
      {
        compilerPath: 'ember-source/dist/ember-template-compiler.js',
        enableLegacyModules: [...],
        transforms: [
          ...templateCompatSupport(),
          ...(STRIP ? ['strip-test-selectors'] : []),
        ],
      },
    ],
    ...babelCompatSupport(),
    ...(STRIP ? [stripPropertiesPlugin()] : []),
  ],
};
```

(Note the behavior of the classic addon `ember-test-selectors` relied on the "Ember environment" that is not accessible at the Babel config level. Ember environment is "development" when you visit `localhost:4200`, "test" when you visit `localhost:4200/tests`, "production" when you do a Vite build, "test" when you do a Vite build and specify `--mode test`.)


License
------------------------------------------------------------------------------

ember-test-selectors is developed by and &copy;
[Mainmatter GmbH](http://mainmatter.com) and contributors. It is released under the
[MIT License](https://github.com/mainmatter/ember-test-selectors/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
