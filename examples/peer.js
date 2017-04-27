'use strict';

var yarn = require('..');

yarn.peerDependencies(['isobject'], function(err) {
  if (err) return console.error(err);
  console.log('done');
});
