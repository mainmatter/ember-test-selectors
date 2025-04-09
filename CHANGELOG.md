# Changelog

## Release (2025-04-09)

* ember-test-selectors 7.1.0 (minor)
* strip-test-selectors 0.1.0 (minor)

#### :rocket: Enhancement
* `ember-test-selectors`, `strip-test-selectors`
  * [#1294](https://github.com/mainmatter/ember-test-selectors/pull/1294) Plugin for Vite ([@BlueCutOfficial](https://github.com/BlueCutOfficial))

#### :house: Internal
* Other
  * [#1300](https://github.com/mainmatter/ember-test-selectors/pull/1300) Move from release-it to release-plan ([@BlueCutOfficial](https://github.com/BlueCutOfficial))
* `ember-test-selectors`
  * [#1289](https://github.com/mainmatter/ember-test-selectors/pull/1289) Monorepo structure ([@BlueCutOfficial](https://github.com/BlueCutOfficial))

#### Committers: 1
- Marine Dunstetter ([@BlueCutOfficial](https://github.com/BlueCutOfficial))


## v7.0.0 (2024-07-25)

#### :boom: Breaking Change
* [#1258](https://github.com/mainmatter/ember-test-selectors/pull/1258) Remove support for Node.js 12, 14 and 16 ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#1220](https://github.com/mainmatter/ember-test-selectors/pull/1220) Remove Glimmer AST Deprecation ([@jrjohnson](https://github.com/jrjohnson))
* [#1213](https://github.com/mainmatter/ember-test-selectors/pull/1213) Add support for `ember-cli-babel` v8 ([@bertdeblock](https://github.com/bertdeblock))

#### :bug: Bug Fix
* [#1212](https://github.com/mainmatter/ember-test-selectors/pull/1212) Fix support for `ember-cli-babel` v7 ([@bertdeblock](https://github.com/bertdeblock))

#### :house: Internal
* [#1257](https://github.com/mainmatter/ember-test-selectors/pull/1257) CI: Add Node.js 18 and 20 to the test matrix ([@Turbo87](https://github.com/Turbo87))
* [#1256](https://github.com/mainmatter/ember-test-selectors/pull/1256) CI: Disable floating Ember.js test scenarios ([@Turbo87](https://github.com/Turbo87))
* [#889](https://github.com/mainmatter/ember-test-selectors/pull/889) renovate: Update `pnpm` version automatically ([@Turbo87](https://github.com/Turbo87))
* [#670](https://github.com/mainmatter/ember-test-selectors/pull/670) Add Embroider's test-setup package ([@thoov](https://github.com/thoov))
* [#847](https://github.com/mainmatter/ember-test-selectors/pull/847) Use `prettier` for code formatting ([@Turbo87](https://github.com/Turbo87))
* [#846](https://github.com/mainmatter/ember-test-selectors/pull/846) CI: Run ember-try scenarios in parallel ([@Turbo87](https://github.com/Turbo87))
* [#845](https://github.com/mainmatter/ember-test-selectors/pull/845) Add `ember-auto-import` and `webpack` dev dependencies ([@Turbo87](https://github.com/Turbo87))
* [#844](https://github.com/mainmatter/ember-test-selectors/pull/844) Enable optional Ember.js features ([@Turbo87](https://github.com/Turbo87))
* [#754](https://github.com/mainmatter/ember-test-selectors/pull/754) Use `pnpm` package manager ([@Turbo87](https://github.com/Turbo87))
* [#761](https://github.com/mainmatter/ember-test-selectors/pull/761) CI: Use new yarn cache in `setup-node` action ([@oscard0m](https://github.com/oscard0m))

#### Committers: 6
- Bert De Block ([@bertdeblock](https://github.com/bertdeblock))
- Jon Johnson ([@jrjohnson](https://github.com/jrjohnson))
- Marco Otte-Witte ([@marcoow](https://github.com/marcoow))
- Oscar Dominguez ([@oscard0m](https://github.com/oscard0m))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- Travis Hoover ([@thoov](https://github.com/thoov))

## v6.0.0 (2021-07-05)

#### :boom: Breaking Change
* [#764](https://github.com/mainmatter/ember-test-selectors/pull/764) Remove deprecated automatic attribute binding ([@Turbo87](https://github.com/Turbo87))
* [#756](https://github.com/mainmatter/ember-test-selectors/pull/756) Drop support for Node.js 10 ([@Turbo87](https://github.com/Turbo87))
* [#757](https://github.com/mainmatter/ember-test-selectors/pull/757) Remove support for ember-cli-babel v5 ([@Turbo87](https://github.com/Turbo87))
* [#759](https://github.com/mainmatter/ember-test-selectors/pull/759) Stop testing on non-LTS Ember releases before v3.24 ([@Turbo87](https://github.com/Turbo87))
* [#758](https://github.com/mainmatter/ember-test-selectors/pull/758) Remove deprecated `TransformTestSelectorParamsToHashPairs` transform ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#763](https://github.com/mainmatter/ember-test-selectors/pull/763) Remove `multidep` setup ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v5.5.0 (2021-07-02)

#### :rocket: Enhancement
* [#751](https://github.com/mainmatter/ember-test-selectors/pull/751) Deprecate `TransformTestSelectorParamsToHashPairs` transform ([@Turbo87](https://github.com/Turbo87))
* [#752](https://github.com/mainmatter/ember-test-selectors/pull/752) Deprecate ember-cli-babel v5.x support ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#755](https://github.com/mainmatter/ember-test-selectors/pull/755) README: Remove outdated EmberMap video ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#753](https://github.com/mainmatter/ember-test-selectors/pull/753) Remove obsolete `greenkeeper` configuration ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v5.4.0 (2021-06-24)

#### :rocket: Enhancement
* [#742](https://github.com/mainmatter/ember-test-selectors/pull/742) Fix caching warnings when running under Embroider ([@rwjblue](https://github.com/rwjblue))

#### Committers: 1
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))

## v5.3.0 (2021-05-25)

#### :rocket: Enhancement
* [#720](https://github.com/mainmatter/ember-test-selectors/pull/720) Resolve class based transform deprecation ([@chancancode](https://github.com/chancancode))
* [#721](https://github.com/mainmatter/ember-test-selectors/pull/721) Add `patchClassicComponent` option to avoid deprecation warnings ([@mydea](https://github.com/mydea))

#### Committers: 2
- Francesco Novy ([@mydea](https://github.com/mydea))
- Godfrey Chan ([@chancancode](https://github.com/chancancode))

## v5.2.0 (2021-05-14)

#### :rocket: Enhancement
* [#713](https://github.com/mainmatter/ember-test-selectors/pull/713) Deprecate automatic attribute bindings ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v5.1.0 (2021-05-07)

#### :rocket: Enhancement
* [#700](https://github.com/mainmatter/ember-test-selectors/pull/700) Convert class based template compilation plugin to functional style ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#704](https://github.com/mainmatter/ember-test-selectors/pull/704) Add `release-it` to simplify the release process ([@Turbo87](https://github.com/Turbo87))
* [#701](https://github.com/mainmatter/ember-test-selectors/pull/701) dummy: Add missing `this.` prefixes ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))

## v5.0.0 (2020-09-02)

This release drops support for Ember.js versions below v3.8 due to an update
of ember-cli-htmlbars which did the same. Other than that, no further breaking
changes are contained in the release.

#### :boom: Breaking Change
* [#527](https://github.com/mainmatter/ember-test-selectors/pull/527) Bump ember-cli-htmlbars from 4.3.1 to 5.1.2 ([@marcoow](https://github.com/marcoow))

#### :rocket: Enhancement
* [#587](https://github.com/mainmatter/ember-test-selectors/pull/587) bind-data-test-attributes: Avoid deprecated `getWithDefault()` call ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#588](https://github.com/mainmatter/ember-test-selectors/pull/588) Update Node.js and Ember.js support documentation ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Marco Otte-Witte ([@marcoow](https://github.com/marcoow))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v4.1.0 (2020-05-07)

#### :rocket: Enhancement
* [#521](https://github.com/mainmatter/ember-test-selectors/pull/521) Ensure test selector stripping works for inline template compilation and co-located components ([@rwjblue](https://github.com/rwjblue))

#### Committers: 1
- Robert Jackson ([@rwjblue](https://github.com/rwjblue))


## v4.0.0 (2020-02-17)

#### :boom: Breaking Change
* [#489](https://github.com/mainmatter/ember-test-selectors/pull/489) Drop support for Ember releases before v3.0.0 ([@Turbo87](https://github.com/Turbo87))
* [#488](https://github.com/mainmatter/ember-test-selectors/pull/488) Drop support for Node 8 ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#463](https://github.com/mainmatter/ember-test-selectors/pull/463) testem: Increase `browser_start_timeout` ([@Turbo87](https://github.com/Turbo87))
* [#446](https://github.com/mainmatter/ember-test-selectors/pull/446) CI: Run main test suite on Windows too ([@Turbo87](https://github.com/Turbo87))
* [#445](https://github.com/mainmatter/ember-test-selectors/pull/445) Update ignore files ([@Turbo87](https://github.com/Turbo87))
* [#444](https://github.com/mainmatter/ember-test-selectors/pull/444) CI: Fix `release` workflow ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v3.0.0 (2019-11-22)

#### :boom: Breaking Change

The main breaking changes in this major release are dropping support for older
Ember.js, Ember CLI and Node.js versions. The v3.x series will have the
following minimum requirements:

- Ember.js 2.16 or above
- Ember CLI 2.14 or above
- Node.js 8 or above 

* [#341](https://github.com/mainmatter/ember-test-selectors/pull/341) Adjust Ember.js support range to 2.16+ ([@Turbo87](https://github.com/Turbo87))
* [#338](https://github.com/mainmatter/ember-test-selectors/pull/338) Use `setupPreprocessorRegistry()` hook to register HTMLBars AST plugin ([@Turbo87](https://github.com/Turbo87))
* [#337](https://github.com/mainmatter/ember-test-selectors/pull/337) Drop support for Node.js 4 and 6 ([@Turbo87](https://github.com/Turbo87))

#### :rocket: Enhancement
* [#322](https://github.com/mainmatter/ember-test-selectors/pull/322) ensure custom tree is still memoized ([@stefanpenner](https://github.com/stefanpenner))
* [#339](https://github.com/mainmatter/ember-test-selectors/pull/339) Enable parallel file processing for `ember-cli-babel` ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#359](https://github.com/mainmatter/ember-test-selectors/pull/359) Revert "Use `setupPreprocessorRegistry()` hook to register HTMLBars AST plugin" ([@Turbo87](https://github.com/Turbo87))

#### :memo: Documentation
* [#441](https://github.com/mainmatter/ember-test-selectors/pull/441) Simplify and modernize README file ([@Turbo87](https://github.com/Turbo87))
* [#342](https://github.com/mainmatter/ember-test-selectors/pull/342) README: Add Node.js compatibility information ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#443](https://github.com/mainmatter/ember-test-selectors/pull/443) Replace TravisCI with GitHub Actions ([@Turbo87](https://github.com/Turbo87))
* [#438](https://github.com/mainmatter/ember-test-selectors/pull/438) Update `ember-cli-babel` to v7.12.0 ([@Turbo87](https://github.com/Turbo87))
* [#437](https://github.com/mainmatter/ember-test-selectors/pull/437) Add dependabot config file ([@Turbo87](https://github.com/Turbo87))
* [#436](https://github.com/mainmatter/ember-test-selectors/pull/436) Update locked dependencies ([@Turbo87](https://github.com/Turbo87))
* [#435](https://github.com/mainmatter/ember-test-selectors/pull/435) Remove `ember-cli-eslint` dependency ([@Turbo87](https://github.com/Turbo87))
* [#434](https://github.com/mainmatter/ember-test-selectors/pull/434) Use new QUnit testing APIs ([@Turbo87](https://github.com/Turbo87))
* [#432](https://github.com/mainmatter/ember-test-selectors/pull/432) Replace `ember-cli-qunit` with `ember-qunit` ([@Turbo87](https://github.com/Turbo87))
* [#340](https://github.com/mainmatter/ember-test-selectors/pull/340) Adjust `.npmignore` blacklist ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Stefan Penner ([@stefanpenner](https://github.com/stefanpenner))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- Yoran Brondsema ([@YoranBrondsema](https://github.com/YoranBrondsema))


## v2.1.0 (2019-03-15)

#### :rocket: Enhancement
* [#323](https://github.com/mainmatter/ember-test-selectors/pull/323) Handle components with empty tag name ([@ssutar](https://github.com/ssutar))

#### :bug: Bug Fix
* [#292](https://github.com/mainmatter/ember-test-selectors/pull/292) Only strip attribute *starting* with `data-test-` ([@bendemboski](https://github.com/bendemboski))

#### :house: Internal
* [#315](https://github.com/mainmatter/ember-test-selectors/pull/315) tests: Check that `link-to` bindings work properly ([@Turbo87](https://github.com/Turbo87))
* [#285](https://github.com/mainmatter/ember-test-selectors/pull/285) TravisCI: Remove deprecated `sudo: false` option ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Ben Demboski ([@bendemboski](https://github.com/bendemboski))
- Santosh Sutar ([@ssutar](https://github.com/ssutar))
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))


## v2.0.0 (2018-10-23)

#### :boom: Breaking Change
* [#254](https://github.com/mainmatter/ember-test-selectors/pull/254) Use `assert()` for "read-only attributeBindings" warning ([@Turbo87](https://github.com/Turbo87))
* [#205](https://github.com/mainmatter/ember-test-selectors/pull/205) utils/bind-data-test-attributes: Handle failing `set()`  with assert instead of warning  ([@mathieupoteriepeopledoc](https://github.com/mathieupoteriepeopledoc))

#### :rocket: Enhancement
* [#237](https://github.com/mainmatter/ember-test-selectors/pull/237) Add support for Babel 7 ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#261](https://github.com/mainmatter/ember-test-selectors/pull/261) Add test for #106 ([@Turbo87](https://github.com/Turbo87))
* [#255](https://github.com/mainmatter/ember-test-selectors/pull/255) yarn: Add `integrity` hashes ([@Turbo87](https://github.com/Turbo87))
* [#248](https://github.com/mainmatter/ember-test-selectors/pull/248) CI: Split CI tasks into multiple jobs ([@Turbo87](https://github.com/Turbo87))
* [#225](https://github.com/mainmatter/ember-test-selectors/pull/225) Remove unused `ember-cli-shims` dependency ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Tobias Bieniek ([@Turbo87](https://github.com/Turbo87))
- [@mathieupoteriepeopledoc](https://github.com/mathieupoteriepeopledoc)


## v1.0.0 (2018-04-26)

#### :boom: Breaking Change
* [#187](https://github.com/mainmatter/ember-test-selectors/pull/187) Remove deprecated code. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#186](https://github.com/mainmatter/ember-test-selectors/pull/186) Converting imports to use ember modules. ([@scalvert](https://github.com/scalvert))

#### Committers: 2
- Steve Calvert ([scalvert](https://github.com/scalvert))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.9 (2018-04-03)

#### :rocket: Enhancement
* [#172](https://github.com/mainmatter/ember-test-selectors/pull/172) Improve Ember 3.x compatibility. ([@marcoow](https://github.com/marcoow))

#### :house: Internal
* [#182](https://github.com/mainmatter/ember-test-selectors/pull/182) Convert `broccoli-stew` to dev dependency. ([@Turbo87](https://github.com/Turbo87))
* [#181](https://github.com/mainmatter/ember-test-selectors/pull/181) Use `qunit-dom` assertions. ([@Turbo87](https://github.com/Turbo87))
* [#179](https://github.com/mainmatter/ember-test-selectors/pull/179) Update `yarn.lock` file. ([@Turbo87](https://github.com/Turbo87))
* [#169](https://github.com/mainmatter/ember-test-selectors/pull/169) testem: Use `--no-sandbox` on TravisCI. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.8 (2017-11-15)

#### :bug: Bug Fix
* [#155](https://github.com/mainmatter/ember-test-selectors/pull/155) Fix HBS transforms for Ember 1.11/1.12. ([@Turbo87](https://github.com/Turbo87))
* [#150](https://github.com/mainmatter/ember-test-selectors/pull/150) bugfix(transform): Disable handlebars transform pre-Ember-1.13. ([@pzuraq](https://github.com/pzuraq))

#### :memo: Documentation
* [#156](https://github.com/mainmatter/ember-test-selectors/pull/156) Generate CHANGELOG using `lerna-changelog`. ([@Turbo87](https://github.com/Turbo87))
* [#141](https://github.com/mainmatter/ember-test-selectors/pull/141) make note about positional params. ([@kellyselden](https://github.com/kellyselden))
* [#140](https://github.com/mainmatter/ember-test-selectors/pull/140) Added a link to the deprecations warning to point to a codemod to help address it. ([@lorcan](https://github.com/lorcan))

#### :house: Internal
* [#154](https://github.com/mainmatter/ember-test-selectors/pull/154) Skip positional params stripping tests on Ember versions without reliable support. ([@Turbo87](https://github.com/Turbo87))
* [#152](https://github.com/mainmatter/ember-test-selectors/pull/152) add acceptance test for params-to-hash-pairs transform. ([@marcoow](https://github.com/marcoow))
* [#147](https://github.com/mainmatter/ember-test-selectors/pull/147) Update "yarn.lock" file and "ember-cli-babel". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 5
- Chris Garrett ([pzuraq](https://github.com/pzuraq))
- Kelly Selden ([kellyselden](https://github.com/kellyselden))
- Lorcan Coyle ([lorcan](https://github.com/lorcan))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.7 (2017-08-04)

#### :rocket: Enhancement
* [#134](https://github.com/mainmatter/ember-test-selectors/pull/134) Deprecate testSelector() helper. ([@marcoow](https://github.com/marcoow))

#### :bug: Bug Fix
* [#138](https://github.com/mainmatter/ember-test-selectors/pull/138) use host to app.import. ([@kellyselden](https://github.com/kellyselden))

#### :house: Internal
* [#135](https://github.com/mainmatter/ember-test-selectors/pull/135) chore: switch to yarn Closes [#132](https://github.com/mainmatter/ember-test-selectors/issues/132). ([@geekygrappler](https://github.com/geekygrappler))
* [#133](https://github.com/mainmatter/ember-test-selectors/pull/133) Update dependencies. ([@marcoow](https://github.com/marcoow))

#### Committers: 3
- Andy Brown ([geekygrappler](https://github.com/geekygrappler))
- Kelly Selden ([kellyselden](https://github.com/kellyselden))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))


## v0.3.6 (2017-07-11)

#### :rocket: Enhancement
* [#127](https://github.com/mainmatter/ember-test-selectors/pull/127) Use new module imports. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#131](https://github.com/mainmatter/ember-test-selectors/pull/131) Fix Babel version detection. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.5 (2017-07-06)

#### :bug: Bug Fix
* [#128](https://github.com/mainmatter/ember-test-selectors/pull/128) Add cacheKey() methods to template transforms. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.4 (2017-05-30)

#### :bug: Bug Fix
* [#116](https://github.com/mainmatter/ember-test-selectors/pull/116) Disable forced test selector stripping in addon templates. ([@Turbo87](https://github.com/Turbo87))
* [#117](https://github.com/mainmatter/ember-test-selectors/pull/117) Update ".npmignore" file. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#114](https://github.com/mainmatter/ember-test-selectors/pull/114) chore(package): update ember-cli to version 2.13.2. ([@Turbo87](https://github.com/Turbo87))
* [#113](https://github.com/mainmatter/ember-test-selectors/pull/113) chore(package): update ember-cli-htmlbars to version 2.0.1. ([@Turbo87](https://github.com/Turbo87))
* [#108](https://github.com/mainmatter/ember-test-selectors/pull/108) Update "ember-cli" to v2.13.0. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.3 (2017-04-24)

#### :rocket: Enhancement
* [#101](https://github.com/mainmatter/ember-test-selectors/pull/101) Remove unused dependencies. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#102](https://github.com/mainmatter/ember-test-selectors/pull/102) Fix ember-cli-babel@6 compatibility. ([@Turbo87](https://github.com/Turbo87))
* [#93](https://github.com/mainmatter/ember-test-selectors/pull/93) Explicit dependency broccoli-stew. ([@raido](https://github.com/raido))

#### :memo: Documentation
* [#94](https://github.com/mainmatter/ember-test-selectors/pull/94) Add video poster to README. ([@samselikoff](https://github.com/samselikoff))

#### Committers: 3
- Raido Kuli ([raido](https://github.com/raido))
- Sam Selikoff ([samselikoff](https://github.com/samselikoff))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.2 (2017-04-07)

#### :bug: Bug Fix
* [#92](https://github.com/mainmatter/ember-test-selectors/pull/92) Revert "Switch to treeForAddonTestSupport". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.3.1 (2017-04-07)

#### :rocket: Enhancement
* [#89](https://github.com/mainmatter/ember-test-selectors/pull/89) Switch to treeForAddonTestSupport. ([@raido](https://github.com/raido))

#### :bug: Bug Fix
* [#88](https://github.com/mainmatter/ember-test-selectors/pull/88) fix: strip data-test-* attributes without explicit value from production build. ([@raido](https://github.com/raido))

#### :memo: Documentation
* [#90](https://github.com/mainmatter/ember-test-selectors/pull/90) add link to ember-map video. ([@marcoow](https://github.com/marcoow))

#### Committers: 2
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Raido Kuli ([raido](https://github.com/raido))


## v0.3.0 (2017-03-27)

#### :rocket: Enhancement
* [#86](https://github.com/mainmatter/ember-test-selectors/pull/86) Add Babel 6 compatibility. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#85](https://github.com/mainmatter/ember-test-selectors/pull/85) fix package.json. ([@marcoow](https://github.com/marcoow))

#### :house: Internal
* [#84](https://github.com/mainmatter/ember-test-selectors/pull/84) update ember-cli and other libraries. ([@marcoow](https://github.com/marcoow))
* [#64](https://github.com/mainmatter/ember-test-selectors/pull/64) Import ESLint config from eslint-config-simplabs. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 3
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.2.1 (2017-01-25)

#### :bug: Bug Fix
* [#59](https://github.com/mainmatter/ember-test-selectors/pull/59) attributeBindings is now frozen in debug builds on v2.11, slice it before pushing. ([@bgentry](https://github.com/bgentry))

#### :house: Internal
* [#63](https://github.com/mainmatter/ember-test-selectors/pull/63) dummy/components: Explicitly set attributeBindings to [] to test freezing. ([@Turbo87](https://github.com/Turbo87))
* [#61](https://github.com/mainmatter/ember-test-selectors/pull/61) Upgrade to ember-cli v2.11.0. ([@Turbo87](https://github.com/Turbo87))
* [#60](https://github.com/mainmatter/ember-test-selectors/pull/60) ember-try: Remove scenarios and rely entirely on "versionCompatibility". ([@Turbo87](https://github.com/Turbo87))

#### Committers: 2
- Blake Gentry ([bgentry](https://github.com/bgentry))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.2.0 (2017-01-23)

#### :rocket: Enhancement
* [#57](https://github.com/mainmatter/ember-test-selectors/pull/57) Add support for component data-test-* attributes without values. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#56](https://github.com/mainmatter/ember-test-selectors/pull/56) tests: Fix typo. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#58](https://github.com/mainmatter/ember-test-selectors/pull/58) GreenKeeper: Ignore "babel-core" updates. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 1
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.1.1 (2017-01-17)

#### :rocket: Enhancement
* [#53](https://github.com/mainmatter/ember-test-selectors/pull/53) Add warning when tagName is empty and data-test-* attributes are used. ([@Turbo87](https://github.com/Turbo87))
* [#52](https://github.com/mainmatter/ember-test-selectors/pull/52) Replace initializer with IIFE in the vendor tree. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#50](https://github.com/mainmatter/ember-test-selectors/pull/50) add blueprint + test helper for integration tests. ([@bgentry](https://github.com/bgentry))

#### Committers: 2
- Blake Gentry ([bgentry](https://github.com/bgentry))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## v0.1.0 (2017-01-12)

#### :rocket: Enhancement
* [#48](https://github.com/mainmatter/ember-test-selectors/pull/48) Updated and simplified README file. ([@Turbo87](https://github.com/Turbo87))
* [#45](https://github.com/mainmatter/ember-test-selectors/pull/45) Add Babel 5 plugin stripping "data-test-*" properties. ([@Turbo87](https://github.com/Turbo87))
* [#43](https://github.com/mainmatter/ember-test-selectors/pull/43) Simplify testSelector() import. ([@Turbo87](https://github.com/Turbo87))
* [#27](https://github.com/mainmatter/ember-test-selectors/pull/27) Auto bind component data-test-* attributes. ([@marcoow](https://github.com/marcoow))
* [#42](https://github.com/mainmatter/ember-test-selectors/pull/42) Introduce "strip" and deprecate "environments" option. ([@Turbo87](https://github.com/Turbo87))
* [#40](https://github.com/mainmatter/ember-test-selectors/pull/40) Strip "data-test-" attributes from component and helper invocations. ([@Turbo87](https://github.com/Turbo87))
* [#37](https://github.com/mainmatter/ember-test-selectors/pull/37) Simplify AST walker and remove "lodash" dependency. ([@Turbo87](https://github.com/Turbo87))
* [#36](https://github.com/mainmatter/ember-test-selectors/pull/36) Run tests with and without stripping test selectors. ([@Turbo87](https://github.com/Turbo87))
* [#25](https://github.com/mainmatter/ember-test-selectors/pull/25) Simplify testSelector() function. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#44](https://github.com/mainmatter/ember-test-selectors/pull/44) Fix default setting for "strip" option. ([@Turbo87](https://github.com/Turbo87))
* [#24](https://github.com/mainmatter/ember-test-selectors/pull/24) Check `value` argument for absence, not falsiness.. ([@chriskrycho](https://github.com/chriskrycho))

#### :memo: Documentation
* [#47](https://github.com/mainmatter/ember-test-selectors/pull/47) Update CHANGELOG. ([@Turbo87](https://github.com/Turbo87))

#### :house: Internal
* [#46](https://github.com/mainmatter/ember-test-selectors/pull/46) CI: Enable automatic NPM deployment for tags. ([@Turbo87](https://github.com/Turbo87))
* [#39](https://github.com/mainmatter/ember-test-selectors/pull/39) Change "npm test" to only run tests for current ember-try scenario. ([@Turbo87](https://github.com/Turbo87))
* [#38](https://github.com/mainmatter/ember-test-selectors/pull/38) Remove/Replace remaining JSHint references. ([@Turbo87](https://github.com/Turbo87))
* [#35](https://github.com/mainmatter/ember-test-selectors/pull/35) Update Ember to v2.10.0. ([@Turbo87](https://github.com/Turbo87))
* [#33](https://github.com/mainmatter/ember-test-selectors/pull/33) Replace JSHint with ESLint. ([@Turbo87](https://github.com/Turbo87))
* [#32](https://github.com/mainmatter/ember-test-selectors/pull/32) Use "jshint" directly for linting. ([@Turbo87](https://github.com/Turbo87))
* [#31](https://github.com/mainmatter/ember-test-selectors/pull/31) CI: Run tests for all minor Ember versions again. ([@Turbo87](https://github.com/Turbo87))
* [#30](https://github.com/mainmatter/ember-test-selectors/pull/30) update license. ([@marcoow](https://github.com/marcoow))
* [#29](https://github.com/mainmatter/ember-test-selectors/pull/29) Update dependencies. ([@Turbo87](https://github.com/Turbo87))

#### Committers: 4
- Chris Krycho ([chriskrycho](https://github.com/chriskrycho))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 0.0.5 (2016-11-23)

#### :rocket: Enhancement
* [#25](https://github.com/mainmatter/ember-test-selectors/pull/25) Simplify testSelector() function. ([@Turbo87](https://github.com/Turbo87))

#### :bug: Bug Fix
* [#24](https://github.com/mainmatter/ember-test-selectors/pull/24) Check `value` argument for absence, not falsiness.. ([@chriskrycho](https://github.com/chriskrycho))

#### Committers: 2
- Chris Krycho ([chriskrycho](https://github.com/chriskrycho))
- Tobias Bieniek ([Turbo87](https://github.com/Turbo87))


## 0.0.4 (2016-09-06)

#### :bug: Bug Fix
* [#22](https://github.com/mainmatter/ember-test-selectors/pull/22) Fix Caching + Fix Tests + Updates. ([@blimmer](https://github.com/blimmer))

#### :memo: Documentation
* [#21](https://github.com/mainmatter/ember-test-selectors/pull/21) fix documentation. ([@Fryie](https://github.com/Fryie))

#### Committers: 2
- Ben Limmer ([blimmer](https://github.com/blimmer))
- Pierpaolo Frasa ([Fryie](https://github.com/Fryie))


## 0.0.3 (2016-04-08)

#### :rocket: Enhancement
* [#14](https://github.com/mainmatter/ember-test-selectors/pull/14) Add ability to specify envs to strip selectors.. ([@blimmer](https://github.com/blimmer))

#### :memo: Documentation
* [#15](https://github.com/mainmatter/ember-test-selectors/pull/15) Fixed typo in README. ([@jmadson](https://github.com/jmadson))

#### :house: Internal
* [#16](https://github.com/mainmatter/ember-test-selectors/pull/16) Remove duplicate repository field in package.json. ([@marcoow](https://github.com/marcoow))

#### Committers: 3
- Ben Limmer ([blimmer](https://github.com/blimmer))
- John Madson ([jmadson](https://github.com/jmadson))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))


## 0.0.2 (2016-03-21)

#### :rocket: Enhancement
* [#12](https://github.com/mainmatter/ember-test-selectors/pull/12) Add test helpers. ([@pdud](https://github.com/pdud))
* [#11](https://github.com/mainmatter/ember-test-selectors/pull/11) use shorthand data attributes. ([@marcoow](https://github.com/marcoow))

#### Committers: 2
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
- Philip Dudley ([pdud](https://github.com/pdud))


## 0.0.1 (2016-03-04)

#### :rocket: Enhancement
* [#7](https://github.com/mainmatter/ember-test-selectors/pull/7) Add the plugin to the registry when in `production` environment. ([@pangratz](https://github.com/pangratz))

#### :bug: Bug Fix
* [#6](https://github.com/mainmatter/ember-test-selectors/pull/6) Fix env based activation. ([@marcoow](https://github.com/marcoow))

#### :memo: Documentation
* [#5](https://github.com/mainmatter/ember-test-selectors/pull/5) Update package.json. ([@pangratz](https://github.com/pangratz))
* [#3](https://github.com/mainmatter/ember-test-selectors/pull/3) docs. ([@marcoow](https://github.com/marcoow))

#### :house: Internal
* [#4](https://github.com/mainmatter/ember-test-selectors/pull/4) Add tests. ([@pangratz](https://github.com/pangratz))

#### Committers: 2
- Clemens Müller ([pangratz](https://github.com/pangratz))
- Marco Otte-Witte ([marcoow](https://github.com/marcoow))
