'use strict';

var yarn = require('..');

yarn(['why', 'find-pkg'], function(err) {
  if (err) return console.error(err);
  console.log('done');
});
