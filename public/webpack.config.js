var config = {
  context: __dirname + '/app',
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
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