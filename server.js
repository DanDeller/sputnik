var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var requireDir = require('require-dir');
var _ = require('lodash');
var endpoints = requireDir('./server/lib/endpoints');
var config = require('./config');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

_.each(endpoints,function(name) {
  app.use(name);
});

var server = app.listen( config.server.port, function() {
  var port = config.server.port;
  console.log('App listening on port:' + port);
});

module.exports = app;