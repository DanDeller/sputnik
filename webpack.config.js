const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./public/libs/libs');
const TARGET = process.env.npm_lifecycle_event;
const ENABLE_POLLING = process.env.ENABLE_POLLING;

const PATHS = {
  app: path.join(__dirname, 'public/app/components'),
  style: [
  path.join(__dirname, 'public/app', 'main.css')
  ],
  build: path.join(__dirname, 'build'),
  test: path.join(__dirname, 'tests')
};

process.env.BABEL_ENV = TARGET;

const config = {
  context: __dirname + '/public/app/components',
  // entry: {
  //     app: PATHS.app // WHY DOES THIS KEEP FAILING?!?!
  //   },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  watch: true,
  resolve: {
    extensions: ['', '.jsx', '.js', '.coffee'],
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
    },
    {
      test: /\.less$/,
      loader: "style!css!less",
    }, {
      test: /\.(ttf|eot|svg|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'base64-font-loader',
    },
    {
      test: /\.(png|jpg)$/,
      loader: 'url-loader'
    }
    ],
  }
};

module.exports = config;