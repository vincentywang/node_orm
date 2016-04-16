var event = db.define("user", {
	user_id : String,
	juus_token : String,
	first_name : String,
	last_name: String,
	email : String,
	phone_num : {type : 'integer'},
	time_created: {type : 'time'}
});