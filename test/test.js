import chai from 'chai';
import chaiHttp from 'chai-http';
import assert from 'assert';
import app from '../server.js';
import React from 'react';
import {mount, shallow} from 'enzyme';
import {expect} from 'chai';
import People from '../public/app/components/People';
import Person from '../public/app/components/Person';

// used to call mount() before global document is loaded
const jsdom = require('jsdom');
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

const should = chai.should();
chai.use(chaiHttp);

describe('API', () => {

	// TESTS FOR REACT COMPONENTS
	describe('Each person:', () => {
		it("should have the class 'note'", function() {
			expect(shallow(<Person />).is('.note')).to.equal(true);
		});
	});

	describe('<People />', () => {
		it('should have the Person component', () => {
			const wrapper = mount(<Person></Person>);
			expect(wrapper.contains(<Person></Person>)).to.equal(true);
		});
	});


	// TESTS FOR ENDPOINTS
	describe('endPoints', function() {
		// for asynchronous stuff add a timeout else GET will fail
		this.timeout(24000);

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
