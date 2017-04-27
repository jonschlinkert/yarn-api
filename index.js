/*!
 * yarn-api <https://github.com/jonschlinkert/yarn-api>
 *
 * Copyright (c) 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var fs = require('fs');
var path = require('path');
var spawn = require('cross-spawn');
var findPkg = require('find-pkg');
var flatten = require('arr-flatten');
var pkgPath = findPkg.sync(process.cwd(), 1);
var cwd = path.dirname(pkgPath);

/**
 * Run `yarn` with the given `cmds`, `args` and callback.
 *
 * ```js
 * yarn(['add', 'isobject'], function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `cmds`
 * @param {String|Array} `args`
 * @param {Function} `cb` Callback
 * @details false
 * @api public
 */

function yarn(cmds, args, cb) {
  if (typeof args === 'function') {
    return yarn(cmds, [], args);
  }

  args = arrayify(cmds).concat(arrayify(args));
  spawn('yarn', args, {cwd: cwd, stdio: 'inherit'})
    .on('error', cb)
    .on('close', function(code, err) {
      cb(err, code);
    });
};

/**
 * Symlink the current project to global `node_modules`.
 * Visit the yarn docs for [link][cli]{link}.
 *
 * ```js
 * yarn.link(function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.link = function(args, cb) {
  yarn('link', args, cb);
};

/**
 * Unlink a previously created symlink for a package.
 * Visit the yarn docs for [unlink][cli]{unlink}.
 *
 * ```js
 * yarn.unlink(function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.unlink = function(args, cb) {
  yarn('unlink', args, cb);
};

/**
 * Installs one or more packages and any packages they depend on.
 *
 * Visit the yarn docs for [add][cli]{add}.
 *
 * ```js
 * yarn.add('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` package names
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.add = function(args, cb) {
  yarn('add', args, cb);
};

/**
 * Execute `yarn add --global` with one or more package `names`.
 *
 * ```js
 * yarn.global('mocha', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @name .global
 * @param {String|Array} `names` One or more package names to install
 * @param  {Function} `cb` Callback
 * @api public
 */

yarn.global = function(names, cb) {
  yarn('global', ['add'].concat(names), cb);
};

/**
 * Install all dependencies for a project. This is most commonly used when
 * you have just checked out code for a project, or when another developer
 * on the project has added a new dependency that you need to pick up.
 *
 * Visit the yarn docs for [install][cli]{install}.
 *
 * ```js
 * yarn.install(function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.install = function(args, cb) {
  yarn('install', args, cb);
};

/**
 * Checks for outdated package dependencies.
 *
 * Visit the yarn docs for [outdated][cli]{outdated}
 *
 * ```js
 * yarn.outdated('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` package names
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.outdated = function(args, cb) {
  yarn('outdated', args, cb);
};

/**
 * Updates all dependencies to their latest version based on the version
 * range specified in the package.json file. The `yarn.lock` file will be
 * (re)created as well.
 *
 * Visit the yarn docs for [upgrade][cli]{upgrade}.
 *
 * ```js
 * yarn.upgrade(function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.upgrade = function(args, cb) {
  yarn('upgrade', args, cb);
};

/**
 * Remove a package from your direct dependencies, updating
 * your package.json and yarn.lock files in the process.
 *
 * Visit the yarn docs for [remove][cli]{remove}.
 *
 * ```js
 * yarn.remove('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `args`
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.remove = function(args, cb) {
  yarn('remove', args, cb);
};

/**
 * Show information about why a package is installed.
 *
 * Visit the yarn docs for [why][cli]{why}.
 *
 * ```js
 * yarn.why('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {Function} `args`
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.why = function(args, cb) {
  yarn('why', args, cb);
};

/**
 * Execute `yarn add` with one or more package `names`.
 * Updates `dependencies` in package.json.
 *
 * ```js
 * yarn.dependencies('micromatch', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` One or more package names to install
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.dependencies = function(names, cb) {
  deps('dependencies', null, names, cb);
};

/**
 * Execute `yarn add --dev` with one or more package `names`.
 * Updates `devDependencies` in package.json.
 *
 * ```js
 * // defined as a string
 * yarn.devDependencies('micromatch', function(err) {
 *   if (err) throw err;
 * });
 *
 * // or as an array
 * yarn.devDependencies(['micromatch', 'is-glob'], function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` One or more package names to install
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.devDependencies = function(names, cb) {
  deps('devDependencies', '-D', names, cb);
};

/**
 * Execute `yarn add --peer` with one or more package `names`.
 * Updates `peerDependencies` in package.json.
 *
 * ```js
 * yarn.peerDependencies('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` One or more package names to install
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.peerDependencies = function(names, cb) {
  deps('peerDependencies', '-P', names, cb);
};

/**
 * Execute `yarn add --optional` with one or more package `names`.
 * Updates `optionalDependencies` in package.json.
 *
 * ```js
 * yarn.optionalDependencies('isobject', function(err) {
 *   if (err) throw err;
 * });
 * ```
 * @param {String|Array} `names` One or more package names to install
 * @param {Function} `cb` Callback
 * @api public
 */

yarn.optionalDependencies = function(names, cb) {
  deps('optionalDependencies', '-O', names, cb);
};

/**
 * Install the given `type` of dependencies,
 * with the specified `flags`
 */

function deps(type, flags, names, cb) {
  names = flatten([].slice.call(arguments, 2));
  cb = names.pop();

  if (type && names.length === 0) {
    names = keys(type);
  }

  if (!names.length) {
    cb();
    return;
  }

  yarn.add(arrayify(flags).concat(names), cb);
}

/**
 * Get the keys from package.json
 */

function keys(prop) {
  return Object.keys(loadPkg()[prop] || {});
}

/**
 * Get the package.json for the current project
 */

function loadPkg() {
  return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
}

/**
 * Cast `val` to an array
 */

function arrayify(val) {
  return val ? (Array.isArray(val) ? val : [val]) : [];
}

/**
 * Expose `yarn`
 */

module.exports = yarn;
