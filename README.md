ember-test-selectors
==============================================================================

Enabling better element selectors in [Ember.js](http://emberjs.com) tests

Features
------------------------------------------------------------------------------

- Removes attributes starting with `data-test-` from HTML tags and
  component/helper invocations in your templates for production builds

- Removes properties starting with `data-test-` from your JS objects like
  component classes for production builds

More information on why that is useful are available on our
[blog](http://simplabs.com/blog/2016/03/04/ember-test-selectors.html)!


Compatibility
------------------------------------------------------------------------------

- Ember 3.8 or above
- Ember CLI 3.8 or above
- Node.js 12 or above


Installation
------------------------------------------------------------------------------

```bash
ember install ember-test-selectors
```


Usage
------------------------------------------------------------------------------

In your templates you are now able to use `data-test-*` attributes, which are
automatically removed from `production` builds:

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

You can override when the `data-test-*` attributes should be stripped from the
build by modifying your `ember-cli-build.js` file:

```js
var app = new EmberApp({
  'ember-test-selectors': {
    strip: false
  }
});
```

`strip` accepts a `Boolean` value and defaults to `!app.tests`, which means
that the attributes will be stripped for production builds, unless the build
was triggered by `ember test`. That means that if you use
`ember test --environment=production` the test selectors will still work, but
for `ember build -prod` they will be stripped out.

License
------------------------------------------------------------------------------

ember-test-selectors is developed by and &copy;
[Mainmatter GmbH](http://mainmatter.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
