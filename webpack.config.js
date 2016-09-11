const path = require('path');
const merge = require('webpack-merge');
const validate = require('webpack-validator');
const parts = require('./public/parts/parts');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('./public/app/main.css');
const extractLESS = new ExtractTextPlugin('./public/app/main.less');

module.exports = {
  entry: [
  'webpack-hot-middleware/client?reload=true',
  path.join(__dirname, 'public/app/index.jsx'),
  path.join(__dirname, 'public/app/main.less')
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
  }),
  extractCSS,
  extractLESS
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
          'react-hot',
          'babel?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ],
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"]
        }
      }, 
      {
        test: /\.json?$/,
        loader: 'json'
      }, 
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      }
    ]
  }
};