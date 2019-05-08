'use strict';

const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
  	publicPath: 'https://sven820.github.io/gogo/dist/',
});

module.exports = webpackConfig;