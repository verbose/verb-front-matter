/*!
 * verb-front-matter <https://github.com/jonschlinkert/verb-front-matter>
 *
 * Copyright (c) 2015 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Module dependencies
 */

var parser = require('parser-front-matter');

module.exports = function matter(file, next) {
  parser.parse(file, function(err) {
    if (err) return next(err);
    next();
  });
};
