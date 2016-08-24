/* eslint no-console: 0 */
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const bodyParser = require('body-parser');
const requireDir = require('require-dir');
const _ = require('lodash');
const endpoints = requireDir('./server/lib/endpoints');
const serverConfig = require('./serverConfig');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : serverConfig.server.port
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
    res.end();
  });
} else {
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  });
}

_.each(endpoints, (name) => {
  app.use(name);
});

app.listen(serverConfig.server.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});

module.exports = app;
