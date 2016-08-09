const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./libs/libs');
const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;
const PATHS = {
  app: path.join(__dirname, 'app/components'),
  style: [
  path.join(__dirname, 'app', 'main.css')
  ],
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const config = {
  context: __dirname + '/app/components',
  // entry: {
  //     app: PATHS.app // WHY DOES THIS KEEP FAILING?!?!
  //   },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  watch: true,
  resolve: {
    extensions: ['', '.js', '.coffee'],
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }
    ],
  }
};
module.exports = config;