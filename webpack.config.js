let path = require('path');

module.exports = {
  mode: 'development',
  // entry: "./src/js/script.js",
  // output: {
  //   filename: "bundle.js",
  //   path: __dirname + '/dist'
  // },
  entry: {
    common: './src/js/script.js',
    page1: './src/pages/main/script.js',
    page2: './src/pages/our-pets/script.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  watch: true,

  devtool: 'source-map',

  module: {

  }
};