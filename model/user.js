var event = db.define("user", {
	id : {type : 'serial', key : true},
	user_id : {type : 'text'},
	juus_token : {type : 'text'},
	first_name : {type : 'text'},
	last_name: {type : 'text'},
	email : {type : 'text'},
	phone_num : {type : 'integer'},
	time_created: {type : 'time'}
});