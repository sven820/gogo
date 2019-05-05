'use strict';

require('./check-versions')();

const path = require('path');
const config = require('./config');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath:(() => {
      if(process.env.NODE_ENV === 'production'){
        return config.build.assetsPublicPath
      } else if(process.env.NODE_ENV === 'test'){
        return config.buildtest.assetsPublicPath
      } else {
        return config.dev.assetsPublicPath
      }
    })()
  },
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
