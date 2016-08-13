const r = require('rethinkdb');
const config = require('../../../serverConfig');
const _ = require('lodash');

module.exports = {
	connect: (callback) => {
		r.connect({
			host: config.db.host,
			port: config.db.port,
			db: config.db.name
		})
		.then((connection) => {
			return callback(null, connection);
		})
		.error((err) => {
			return callback(err);
		});
	},
	list: function(callback) {
		this.connect((err, connection) => {
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.run(connection)
				.then((cursor) => {
					return cursor.toArray();
				})
				.then((users) => {
					return callback(null, users);
				})
				.error((err) => {
					return callback(err);
				});
		});
	},
	post: (request, callback) => {
		var currentPerson = request.body;
		this.connect((err, connection) => {
			// console.log(request) // logs request
			console.log(request.body) // errors on logging request.body
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
				// console.log(config.db.name + ' + ' + config.db.tables.people) // logs db name and right table
				.insert({
					name: currentPerson.name // this doesn't work
					// name: 'where is the body??' // but this does
				})
				.run(connection)
				.then((response) => {
					 return callback(null, response);
				})
				.error((error) => {
					 return callback(error);
				});
		});
	},
	patch: (request, callback) => {
		this.connect((err, connection) => {
			var query = _.extend(request.body,request.params,request.query);
  			var id = query.id;
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.get(id)
			.update(query)
			.run(connection)
			.then((cursor) => {
				return cursor.toArray();
			})
			.then((response) => {
				return callback(null, response);
			})
			.error((error) => {
				return callback(error);
			});
		});
	},
	delete: (request, callback) => {
		this.connect((err, connection) => {
			var currentId = request.query;
			if (err) return callback(err)
			r.db(config.db.name).table(config.db.tables.people)
			.get(currentId.id)
			.delete()
			.run(connection)
			.then((response) => {
				return callback(null, response);
			})
			.error((error) => {
				return callback(error);
			});
		});
	}
};
