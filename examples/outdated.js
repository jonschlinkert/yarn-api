'use strict';

var yarn = require('..');

yarn.outdated(function(err) {
  if (err) return console.error(err);
  console.log('done');
});
