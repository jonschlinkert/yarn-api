'use strict';

var yarn = require('..');

yarn.install(['--force', '--har'], function(err) {
  if (err) return console.error(err);
  console.log('done');
});
