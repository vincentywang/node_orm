var express = require('express');
var router = express.Router();
var eventMod = require('../model/events');


router.get('/', function (req, res, next) {
	res.send({'message' : 'get event'});
});

router.get('/add', function(req, res, next) {

	var eventId = req.params.event_id,
		creator = req.params.creator,
		location = req.params.location;

	var newRecode = {};
	newRecode.event_id = eventId;
	newRecode.location = location;
	newRecode.creator = creator;



	console.log(eventMod);

	eventMod.create(newRecode, function(err, results){
		console.log(newRecode);
		if (err) {
			console.log('below is error');
			console.log(err);
		}
		console.log('below is result');
		console.log(results);
	});

	console.log(eventId);
	console.log(creator);
	console.log(location);

	res.send('add new event');
});

router.get('/update', function(req, res, next) {
	res.send('update event');
});

router.get('/delete', function(req, res, next) {
	res.send('delete event');
});

module.exports = router;