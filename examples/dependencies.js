'use strict';

var yarn = require('..');

yarn.dependencies(function(err, args) {
  if (err) return console.error(err);
  console.log('done', args);
});

