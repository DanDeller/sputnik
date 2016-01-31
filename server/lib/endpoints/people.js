var express = require('express');
var router = express.Router();
var People = require('../models/People');

router.get('/people', function(req, res) {
	People.list(req, function(error, response) {
		if (error) return res.end();
		res.send(response);
	});
});

module.exports = router;