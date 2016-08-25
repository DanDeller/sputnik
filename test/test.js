const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../server.js');

chai.use(chaiHttp);

describe('api', () => {
	describe('endPoints', function() {
		const that = this;
		that.timeout(15000); // for asynchronous stuff add a timeout else GET will fail

		// GET request - should return 200 status code
		it('should return 200 on GET', (done) => {
			chai.request(app)
			.get('/people')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				if (err) return done(err);
				done();
			});
		});

		// POST request - should return 200 status code
		it('should return 200 on POST', (done) => {
			chai.request(app)
			.post('/people')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('object');
				if (err) return done(err);
				done();
			});
		});

		// DELETE request - should return 200 status code
		it('should return 200 on DELETE', (done) => {
			chai.request(app)
			.delete('/people')
			.end((err, res) => {
				res.should.have.status(200);
				if (err) return done(err);
				done();
			});
		});

	});
	
});
