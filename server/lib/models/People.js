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

exports.patch = function(request, callback) {
	var query = _.extend(request.body, request.params, request.query);
	var id = query.id;
	r.table('people').get(id).update(query).run()
	.then(function(response) {
		callback(null, response);
	}).error(function(error) {
		callback(error);
	});
};

exports.delete = function(request, callback) {
	var currentId = request.query;
	r.table('people').get(currentId.id).delete().run()
	.then(function(response) {
		callback(null, response);
	}).error(function(error) {
		callback(error);
	});
};