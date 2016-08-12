module.exports = {
  entry: 'mocha!./test/index.js',
  output: {
    filename: 'test.build.js',
    path: 'test/',
    publicPath: 'http://' + 'localhost' + ':' + 3010 + '/test'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      loaders: ['babel-loader']
    },
    {
      test: /(\.css|\.less)$/,
      loader: 'null-loader',
      exclude: [
      /build/
      ]
    },
    {
      test: /(\.jpg|\.jpeg|\.png|\.gif)$/,
      loader: 'null-loader'
    }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 3010
  }
};