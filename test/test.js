'use strict';

require('mocha');
var assert = require('assert');
var yarn = require('..');

describe('yarn', function() {
  it('should export a function', function() {
    assert.equal(typeof yarn, 'function');
  });

  it('should export an object', function() {
    assert(yarn);
    assert.equal(typeof yarn, 'object');
  });

  it('should throw an error when invalid args are passed', function() {
    assert.throws(function() {
      sortBy();
    });
  });
});
