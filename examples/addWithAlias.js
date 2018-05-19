'use strict';

var yarn = require('..');

yarn.addWithAlias('lodash', '_', function(err) {
  if (err) return console.error(err);
  console.log('done');
});
