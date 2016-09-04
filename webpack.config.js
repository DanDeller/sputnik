const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./public/libs/parts');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
  'webpack-hot-middleware/client?reload=true',
  path.join(__dirname, 'public/app/index.jsx'),
  path.join(__dirname, 'public/app/main.css')
  ],
  output: {
    path: path.join(__dirname, '/public/app/'),
    filename: '[name].js'
  },
  plugins: [
  new HtmlWebpackPlugin({
    template: 'public/app/index.tpl.html',
    inject: 'body',
    filename: 'index.html'
  }),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, "public/app")
        ],
        exclude: /node_modules/,
        loaders: [
          'react-hot'
        ],
        loader: 'babel',
        query: {
          "presets": ["es2015", "react", "react-hmre", "stage-0"]
        }
      }, 
      {
        test: /\.json?$/,
        loader: 'json'
      }, 
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }
    ]
  }
};