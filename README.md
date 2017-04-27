# yarn-api [![NPM version](https://img.shields.io/npm/v/yarn-api.svg?style=flat)](https://www.npmjs.com/package/yarn-api) [![NPM monthly downloads](https://img.shields.io/npm/dm/yarn-api.svg?style=flat)](https://npmjs.org/package/yarn-api)  [![NPM total downloads](https://img.shields.io/npm/dt/yarn-api.svg?style=flat)](https://npmjs.org/package/yarn-api) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/yarn-api.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/yarn-api)

> Basic API for yarn.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save yarn-api
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add yarn-api
```

## Usage

```js
var yarn = require('yarn-api');
```

## API

### [yarn](index.js#L34)

Execute `yarn add` with the given `args`, package `names` and callback.

**Params**

* `args` **{String|Array}**
* `names` **{String|Array}**
* `cb` **{Function}**: Callback

**Example**

```js
yarn('--save', ['isobject'], function(err) {
  if (err) throw err;
});
```

<details>
<summary><strong>.link</strong></summary>

### [.link](index.js#L61)

Symlink the current project to global `node_modules`. Visit the yarn docs for [link](https://yarnpkg.com/en/docs/cli/link).

**Params**

* `cb` **{Function}**: Callback

**Example**

```js
yarn.link(function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.unlink</strong></summary>

### [.unlink](index.js#L79)

Unlink a previously created symlink for a package. Visit the yarn docs for [unlink](https://yarnpkg.com/en/docs/cli/unlink).

**Params**

* `cb` **{Function}**: Callback

**Example**

```js
yarn.unlink(function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.add</strong></summary>

### [.add](index.js#L99)

Installs one or more packages and any packages they depend on.

Visit the yarn docs for [add](https://yarnpkg.com/en/docs/cli/add).

**Params**

* `names` **{String|Array}**: package names
* `cb` **{Function}**: Callback

**Example**

```js
yarn.add('isobject', function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.install</strong></summary>

### [.install](index.js#L120)

Install all dependencies for a project. This is most commonly used when you have just checked out code for a project, or when another developer on the project has added a new dependency that you need to pick up.

Visit the yarn docs for [install](https://yarnpkg.com/en/docs/cli/install).

**Params**

* `cb` **{Function}**: Callback

**Example**

```js
yarn.install(function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.outdated</strong></summary>

### [.outdated](index.js#L140)

Checks for outdated package dependencies.

Visit the yarn docs for [outdated](https://yarnpkg.com/en/docs/cli/outdated).

**Params**

* `names` **{String|Array}**: package names
* `cb` **{Function}**: Callback

**Example**

```js
yarn.outdated('isobject', function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.upgrade</strong></summary>

### [.upgrade](index.js#L161)

Updates all dependencies to their latest version based on the version range specified in the package.json file. The `yarn.lock` file will be (re)created as well.

Visit the yarn docs for [upgrade](https://yarnpkg.com/en/docs/cli/upgrade).

**Params**

* `cb` **{Function}**: Callback

**Example**

```js
yarn.upgrade(function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.dependencies</strong></summary>

### [.dependencies](index.js#L180)

Execute `yarn add` with one or more package `names`. Updates `dependencies` in package.json.

**Params**

* `names` **{String|Array}**: One or more package names to install
* `cb` **{Function}**: Callback

**Example**

```js
yarn.dependencies('micromatch', function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.devDependencies</strong></summary>

### [.devDependencies](index.js#L205)

Execute `yarn add --dev` with one or more package `names`. Updates `devDependencies` in package.json.

**Params**

* `names` **{String|Array}**: One or more package names to install
* `cb` **{Function}**: Callback

**Example**

```js
// defined as a string
yarn.devDependencies('micromatch', function(err) {
  if (err) throw err;
});

// or as an array
yarn.devDependencies(['micromatch', 'is-glob'], function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.peerDependencies</strong></summary>

### [.peerDependencies](index.js#L224)

Execute `yarn add --peer` with one or more package `names`. Updates `peerDependencies` in package.json.

**Params**

* `names` **{String|Array}**: One or more package names to install
* `cb` **{Function}**: Callback

**Example**

```js
yarn.peerDependencies('isobject', function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.optionalDependencies</strong></summary>

### [.optionalDependencies](index.js#L243)

Execute `yarn add --optional` with one or more package `names`. Updates `optionalDependencies` in package.json.

**Params**

* `names` **{String|Array}**: One or more package names to install
* `cb` **{Function}**: Callback

**Example**

```js
yarn.optionalDependencies('isobject', function(err) {
  if (err) throw err;
});
```

</details>

<details>
<summary><strong>.global</strong></summary>

### [.global](index.js#L261)

Execute `yarn add --global` with one or more package `names`.

**Params**

* `names` **{String|Array}**: One or more package names to install
* `cb` **{Function}**: Callback

**Example**

```js
yarn.global('mocha', function(err) {
  if (err) throw err;
});
```

</details>

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

Please read the [contributing guide](.github/contributing.md) for advice on opening issues, pull requests, and coding standards.

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on April 27, 2017._