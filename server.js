var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');
var bodyParser = require('body-parser');
var requireDir = require('require-dir');
var _ = require('lodash');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(express.static(path.join(__dirname, './public')))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// _.each(endpoints,function(middleware, name) {
//   app.use(middleware);
// });

var server = app.listen(3000, function() {
  var port = server.address().port;
  var host = server.address.address;
  console.log('App listening at http://%s:%s', host, port)
});

module.exports = app;