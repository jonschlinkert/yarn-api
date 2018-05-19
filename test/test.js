'use strict';

require('mocha');
var assert = require('assert');
var yarn = require('..');

describe('yarn', function() {
  it('should export a function', function() {
    assert.equal(typeof yarn, 'function');
  });

  it('should expose methods', function() {
    assert.equal(typeof yarn.add, 'function');
    assert.equal(typeof yarn.addWithAlias, 'function');
    assert.equal(typeof yarn.dependencies, 'function');
    assert.equal(typeof yarn.devDependencies, 'function');
    assert.equal(typeof yarn.global, 'function');
    assert.equal(typeof yarn.install, 'function');
    assert.equal(typeof yarn.link, 'function');
    assert.equal(typeof yarn.optionalDependencies, 'function');
    assert.equal(typeof yarn.outdated, 'function');
    assert.equal(typeof yarn.peerDependencies, 'function');
    assert.equal(typeof yarn.unlink, 'function');
    assert.equal(typeof yarn.upgrade, 'function');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      sortBy();
    });
  });
});
