var express = require('express');
var router = express.Router();
var eventMod = require('../model/events');

console.log('included the event controllers');

router.get('/', function (req, res, next) {
	res.send({'message' : 'get event'});
});

router.post('/add', function(req, res, next) {

	// below creator information should get from the login user
	var eventCreator = '12345',
		eventReceiver = req.body.event_receiver,
		eventToken = eventCreator + Date.now() + eventReceiver,
		eventName = req.body.event_name,
		eventTime = req.body.event_time,
		eventLocation = req.body.event_location,
		eventMeta = {
			'event_name' : eventName,
			'event_location' : eventLocation
		};

	console.log('what is the req body');
	console.log(req.body);

	console.log('what is the ')

	var newRecode = {};
	newRecode.event_token = eventToken;
	newRecode.event_meta = JSON.stringify(eventMeta);
	newRecode.creator = eventCreator;
	newRecode.receiver = eventReceiver;
	newRecode.event_time = eventTime;
	newRecode.create_time = Date.now();

	console.log('what is the new record');
	console.log(newRecode);

	eventMod.create(newRecode, function(err, results){
		console.log(newRecode);
		if (err) {
			console.log('below is error');
			console.log(err);
		}
		console.log('below is result');
		console.log(results);
	});

	res.send('add new event');
});

router.get('/update', function(req, res, next) {
	res.send('update event');
});

router.get('/delete', function(req, res, next) {
	res.send('delete event');
});

module.exports = router;