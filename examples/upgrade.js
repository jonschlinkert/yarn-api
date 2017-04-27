'use strict';

var yarn = require('..');

yarn.upgrade(['isobject'], function(err) {
  if (err) return console.error(err);
  console.log('done');
});
