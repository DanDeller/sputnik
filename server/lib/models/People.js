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