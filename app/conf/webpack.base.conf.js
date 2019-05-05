'use strict';

require('./check-versions')();

const path = require('path');
const config = require('../config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
    ]
  },
};
