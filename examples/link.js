'use strict';

var yarn = require('..');

yarn.link(function(err) {
  if (err) return console.error(err);
  console.log('done');
});
