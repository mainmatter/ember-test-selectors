# ember-test-selectors

[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]

[npm-badge]: https://img.shields.io/npm/v/ember-test-selectors.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-test-selectors
[travis-badge]: https://img.shields.io/travis/simplabs/ember-test-selectors/master.svg?label=TravisCI
[travis-badge-url]: https://travis-ci.org/simplabs/ember-test-selectors

Enabling better element selectors in [Ember.js](http://emberjs.com) tests


## Features

- Provides a `testSelector()` function to help you select the right elements

- Removes attributes starting with `data-test-` from HTML tags and
  component/helper invocations in your templates for production builds

- Removes properties starting with `data-test-` from your JS objects like
  component classes for production builds

- Automatically binds properties starting with `data-test-` on all components
  for development/testing builds

More information on why that is useful are available on our
[blog](http://simplabs.com/blog/2016/03/04/ember-test-selectors.html)!


## Installation

```bash
ember install ember-test-selectors
```


## Usage

In your templates you are now able to use `data-test-*` attributes, which are
automatically removed from `production` builds:

```hbs
<article>
  <h1 data-test-post-title data-test-resource-id="{{post.id}}">{{post.title}}</h1>
  <p>{{post.body}}</p>
</article>
```

Once you've done that you can use the `testSelector()` function to create
a CSS/jQuery selector that looks up the right elements:

```js
import testSelector from 'ember-test-selectors';

// in Acceptance Tests:

find(testSelector('post-title')) // => find('[data-test-post-title]')
find(testSelector('resource-id', '2')) // => find('[data-test-resource-id="2"]')

// in Component Integration Tests:

this.$(testSelector('post-title')).click() // => this.$('[data-test-post-title]').click()
this.$(testSelector('resource-id', '2')).click() // => this.$('[data-test-resource-id="2"]').click()
```

### Usage in Components

You can also use `data-test-*` attributes on components:

```handlebars
{{comments-list data-test-comments-for=post.id}}
```

These `data-test-*` attributes will be bound automatically and available
as data attributes on the `<div>` wrapping the component template:

```html
<div id="ember123" data-test-comments-for="42">
  <!-- comments -->
</div>
```

### Usage in Computed Properties

Instead of assigning `data-test-comment-id` in this example template:

```handlebars
{{#each comments as |comment|}}
  {{comment-list-item comment=comment data-test-comment-id=comment.id}}
{{/each}}
```

you may also use computed properties on the component:

```js
export default Ember.Component({
  comment: null,
  'data-test-comment-id': Ember.computed.readOnly('comment.id'),
});
```

As with `data-test-*` attributes in the templates, these properties, whether
computed or not, will be removed automatically in production builds.


## Configuration

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


## License

ember-test-selectors is developed by and &copy;
[simplabs GmbH](http://simplabs.com) and contributors. It is released under the
[MIT License](https://github.com/simplabs/ember-simple-auth/blob/master/LICENSE).

ember-test-selectors is not an official part of [Ember.js](http://emberjs.com)
and is not maintained by the Ember.js Core Team.
