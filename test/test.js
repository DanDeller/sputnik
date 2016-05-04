var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var app = require('../server.js');

chai.use(chaiHttp);

describe('api', function() {
	describe('endPoints', function() {

		// GET request - should return 200 status code
		it('should return 200 on GET', function(done) {
			chai.request(app)
			.get('/people')
			.end(function(err, res) {
				res.should.have.status(200);
				res.should.be.json;
				if (err) return done(err);
				done();
			});
		});

		// POST request - should return 200 status code
		it('should return 200 on POST', function(done) {
			chai.request(app)
			.post('/people')
			.end(function(err, res) {
				res.should.have.status(200);
				if (err) return done(err);
				done();
			});
		});

		// DELETE request - should return 200 status code
		it('should return 200 on DELETE', function(done) {
			chai.request(app)
			.delete('/people')
			.end(function(err, res) {
				res.should.have.status(200);
				if (err) return done(err);
				done();
			});
		});

	});
});
