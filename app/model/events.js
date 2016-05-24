var db = require('../../db.js');

var Event = db.define("events", {
	id : {type : 'serial', key : true},
	event_token : {type : 'text', key : false},
	event_id : {type : 'text', key : false},
	creator : {type : 'text', key : false},
	receiver: {type : 'text', key : false},
	location: {type : 'text', key : false},
	time : {type : 'date', key : false}
});

module.exports = Event;


// module.exports = function(record) {

// 	var Event = db.define("event", {
// 		id : {type : 'serial', key : true},
// 		event_token : {type : 'text'},
// 		event_id : {type : 'text'},
// 		creator : {type : 'text'},
// 		receiver: {type : 'text'},
// 		location: {type : 'text'},
// 		time : {type : 'date'}
// 	});

// 	// Event.create(record, function(err, results){

// 	// 	console.log('do i run this create function');
// 	// });

// 	// Event.find(record, function(err, results) {

// 	// });

// 	// Event.delete(record, function(err, results) {

// 	// });

// 	// Event.update(record, function(err, results) {

// 	// });

// 	return Event;
// };