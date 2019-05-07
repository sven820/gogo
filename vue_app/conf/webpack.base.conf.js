'use strict';

require('./check-versions')();

const path = require('path');
const config = require('./config');

module.exports = {
  outputDir: '../dist',
  indexPath: '../index.html',
  productionSourceMap: false
  // assetsDir: 'static'
};
