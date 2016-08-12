const r = require('rethinkdb');
const config = require('../../../serverConfig');
const _ = require('lodash');

module.exports = {
	connect: function(callback) {
		r.connect({
			host: config.db.host,
			port: config.db.port,
			db: config.db.name
		})
		.then(function(connection) {
			return callback(null, connection);
		})
		.error(function(err) {
			return callback(err);
		});
	},
	list: function(callback) {
		this.connect(function(err, connection) {
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.run(connection)
				.then(function(cursor) {
					return cursor.toArray();
				})
				.then(function(users) {
					return callback(null, users);
				})
				.error(function(err) {
					return callback(err);
				});
		});
	},
	post: function(request, callback) {
		var currentPerson = request.body;
		this.connect(function(err, connection) {
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
				.insert({
					name: currentPerson.name
				})
				.run(connection)
				.then(function(response) {
					 return callback(null, response);
				})
				.error(function(error) {
					 return callback(error);
				});
		});
	},
	patch: function(request, callback) {
		this.connect(function(err, connection) {
			var query = _.extend(request.body,request.params,request.query);
  			var id = query.id;
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.get(id)
			.update(query)
			.run(connection)
			.then(function(cursor) {
				return cursor.toArray();
			})
			.then(function(response) {
				return callback(null, response);
			})
			.error(function(error) {
				return callback(error);
			});
		});
	},
	delete: function(request, callback) {
		this.connect(function(err, connection) {
			var currentId = request.query;
			console.log(currentId)
			if (err) return callback(err)
			r.db(config.db.name).table(config.db.tables.people)
			.get(currentId.id)
			.delete()
			.run(connection)
			.then(function(response) {
				return callback(null, response);
			})
			.error(function(error) {
				return callback(error);
			});
		});
	}
};
