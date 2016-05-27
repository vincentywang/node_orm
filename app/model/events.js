var db = require('../../db.js');

var Event = db.define("events", {
	id : {type : 'serial', key : true},
	event_token : {type : 'text', key : false},
	creator : {type : 'text', key : false},
	receiver: {type : 'text', key : false},
	event_meta : {type : 'text', key : false},
	event_time: {type : 'date', time : true},
	create_time : {type : 'date', time : false}
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