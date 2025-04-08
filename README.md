ember-test-selectors
==============================================================================

Enabling better element selectors in [Ember.js](http://emberjs.com) tests

> [!NOTE]
> ember-test-selectors was written and is maintained by [Mainmatter](https://mainmatter.com) and contributors.
> We offer consulting, training, and team augmentation for Ember.js – check out our [website](https://mainmatter.com/ember-consulting/) to learn more!

Features
------------------------------------------------------------------------------

- Removes attributes starting with `data-test-` from HTML tags and
  component/helper invocations in your templates for production builds

- Removes properties starting with `data-test-` from your JS objects like
  component classes for production builds

More information on why that is useful are available on our
[blog](https://mainmatter.com/blog/2017/11/17/ember-test-selectors-road-to-1-0/)!


Compatibility
------------------------------------------------------------------------------

- Classic Ember apps: Ember 3.8 or above, Ember CLI 3.8 or above
- Embroider+Vite apps: Ember 3.28 or above, Ember CLI 4.12 or above
- Node.js 18 or above


Installation in a Classic Ember app
------------------------------------------------------------------------------

Install and use `ember-test-selectors` addon:

```bash
ember install ember-test-selectors
```

See the [addon configuration in the dedicated README](https://github.com/mainmatter/ember-test-selectors/blob/master/ember-test-selectors/README.md).


Installation in an Embroider+Vite app
------------------------------------------------------------------------------

It's recommended to install and configure `strip-test-selectors` Babel plugin directly. (You can install and use `ember-test-selectors` classic addon, but `@embroider/compat` will have to rewrite it to maintain the compatibility with Vite, and this step has a performance cost.)

```bash
pnpm add -D strip-test-selectors
```

See the [Babel configuration in the dedicated README](https://github.com/mainmatter/ember-test-selectors/blob/master/strip-test-selectors/README.md).


Usage
------------------------------------------------------------------------------

In your templates you are now able to use `data-test-*` attributes and get them removed from `production` builds:

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


License
------------------------------------------------------------------------------

ember-test-selectors is developed by and &copy;
[Mainmatter GmbH](http://mainmatter.com) and contributors. It is released under the
[MIT License](https://github.com/mainmatter/ember-test-selectors/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
