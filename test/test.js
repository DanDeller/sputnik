var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
var app = require('../server.js');

chai.use(chaiHttp);

// describe('api', function() {
// 	describe('endPoints', function() {

// 		it('should return 200 on GET request', function(done) {
// 			chai.request(app)
// 			.get('/people')
// 			.end(function(err, res) {
// 				res.should.have.status(200);
// 				if (err) return done(err);
// 				done();
// 			});
// 		});

// 	});
// });