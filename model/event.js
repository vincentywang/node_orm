var event = db.define("event", {
	event_token : String,
	event_id : String,
	creator : String,
	receiver: String,
	location: String,
	time : {type : 'date'}
});