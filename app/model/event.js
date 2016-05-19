var db = require('../../db.js');

module.exports = function(record) {

	var Event = db.define("event", {
		id : {type : 'serial', key : true},
		event_token : {type : 'text'},
		event_id : {type : 'text'},
		creator : {type : 'text'},
		receiver: {type : 'text'},
		location: {type : 'text'},
		time : {type : 'date'}
	});

	Event.create(record, function(err, results){

	});

	Event.find(record, function(err, results) {

	});

	Event.delete(record, function(err, results) {

	});

	Event.update(record, function(err, results) {

	});

	return Event;
};