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
	list: function (callback) {
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
	post: function(request, callback) {
		const currentPerson = request.body;
		this.connect((err, connection) => {
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.insert({
				id: currentPerson.id,
				name: currentPerson.name
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
	patch: function(request, callback) {
		this.connect((err, connection) => {
			const query = _.extend(request.body,request.params,request.query);
			const id = query.id;
			if (err) return callback(err);
			r.db(config.db.name).table(config.db.tables.people)
			.get(id)
			.update(query)
			.run(connection)
			.then((response) => {
				return callback(null, response);
			})
			.error((error) => {
				return callback(error);
			});
		});
	},
	delete: function(request, callback) {
		this.connect((err, connection) => {
			const currentId = request.query;
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
