var event = db.define("event", {
	id : {type : 'serial', key : true},
	event_token : {type : 'text'},
	event_id : {type : 'text'},
	creator : {type : 'text'},
	receiver: {type : 'text'},
	location: {type : 'text'},
	time : {type : 'date'}
});