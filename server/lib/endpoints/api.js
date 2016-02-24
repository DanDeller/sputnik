var express = require('express');
var router = express.Router();
var People = require('../models/People');

router.get('/people', function(req, res) {
	People.list(req, function(error, response) {
		// if (error) return res.end();
		// console.log(response)
		res.send(response);
	});
});

router.post('/people', function(req, res) {
	People.post(req, function(error, response) {
		if (error) return res.end();
		res.send(response);
	});
});

router.patch('/people', function(req, res) {
	People.patch(req, function(error, response) {
		if (error) return res.end();
		res.send(response);
	});
});

router.delete('/people', function(req, res) {
	People.delete(req, function(error, response) {
		if (error) return res.end();
		res.send(response);
	});
});

module.exports = router;
