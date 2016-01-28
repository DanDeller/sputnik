var express = require('express');
var app = express();
// var router = express.Router();

app.get('/', function(req, res) {
  res.send('hello dan');
});

var server = app.listen(3000, function() {
  var port = server.address().port;
  var host = server.address.address;
  console.log('App listening at http://%s:%s', host, port)
});