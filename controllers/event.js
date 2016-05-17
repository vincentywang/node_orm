var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.send({'message' : 'get event'});
});

router.get('/add', function(req, res, next) {
	res.send('add new event');
});

router.get('/update', function(req, res, next) {
	res.send('update event');
});

router.get('/delete', function(req, res, next) {
	res.send('delete event');
});

module.exports = router;