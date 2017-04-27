'use strict';

var yarn = require('..');

yarn.add(['isobject', 'is-valid-app'], function(err) {
  if (err) return console.error(err);
  console.log('done');
});
