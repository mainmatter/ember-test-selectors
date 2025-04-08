'use strict';

/* eslint-env node */

const getChannelURL = require('ember-source-channel-url');

module.exports = function () {
  return Promise.all([
    getChannelURL('release'),
    getChannelURL('beta'),
    getChannelURL('canary'),
  ]).then((urls) => {
    return {
      usePnpm: true,
      command: 'pnpm test',
      scenarios: [
        {
          name: 'ember-lts-3.28',
          npm: {
            devDependencies: {
              '@glimmer/component': '2.0.0-beta.21',
              'ember-source': '~3.28.0',
              'ember-cli': '~4.12.0',
              // ember-page-title 9.0.0 dropped support for Ember < 4.2
              'ember-page-title': '^8.0.0',
            },
          },
        },
        {
          name: 'ember-lts-4.4',
          npm: {
            devDependencies: {
              // Starting 2.0.0-beta.22, @glimmer/component relies on @ember/owner,
              // which wasn't a thing in Ember 4.4. 2.0.0-beta.21 is the last version
              // relying on @ember/application to setOwner
              '@glimmer/component': '2.0.0-beta.21',
              'ember-source': '~4.4.0',
              // Embroider+Vite requires ember-cli > 4.12
              'ember-cli': '~4.12.0',
            },
          },
        },
        {
          name: 'ember-lts-4.12',
          npm: {
            devDependencies: {
              'ember-source': '~4.12.0',
            },
          },
        },
        {
          name: 'ember-lts-5.4',
          npm: {
            devDependencies: {
              'ember-source': '~5.4.0',
            },
          },
        },
        {
          name: 'ember-lts-5.8',
          npm: {
            devDependencies: {
              'ember-source': '~5.8.0',
            },
          },
        },
        {
          name: 'ember-lts-5.12',
          npm: {
            devDependencies: {
              'ember-source': '~5.12.0',
            },
          },
        },
        {
          name: 'ember-release',
          npm: {
            devDependencies: {
              'ember-source': urls[0],
            },
          },
        },
        {
          name: 'ember-beta',
          npm: {
            devDependencies: {
              'ember-source': urls[1],
            },
          },
        },
        {
          name: 'ember-canary',
          npm: {
            devDependencies: {
              'ember-source': urls[2],
            },
          },
        },
        {
          name: 'ember-default',
          npm: {
            devDependencies: {},
          },
        },
      ],
    };
  });
};
