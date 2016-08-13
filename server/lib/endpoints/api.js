const express = require('express');
const router = express.Router();
const People = require('../models/People');

router.get('/people', (req, res) => {
	People.list((error, response) => {
		if (error) return res.end();
		return res.send(response);
	});
});

router.post('/people', (req, res) => {
	People.post(req, (error, response) => {
		console.log(req + ' - part of api.js')
		if (error) return res.end();
		res.send(response);
	});
});

router.patch('/people', (req, res) => {
	People.patch(req, (error, response) => {
		if (error) return res.end();
		res.send(response);
	});
});

router.delete('/people', (req, res) => {
	People.delete(req, (error, response) => {
		if (error) return res.end();
		res.send(response);
	});
});

module.exports = router;
