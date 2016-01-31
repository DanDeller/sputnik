var _ = require('lodash');
var r = require('../r.js');

exports.list = function(request, callback) {
	r.table('people').run()
	.then(function(response) {
		callback(null, response);
	}).error(function(error) {
		callback(error);
	});
};

exports.post = function(request, callback) {
	var currentPerson = request.body;
	r.table('people').insert({
		name: currentPerson.name
	}).then(function(response) {
		callback(null, response);
	}).error(function(error) {
		callback(error);
	});
};