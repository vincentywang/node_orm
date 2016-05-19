var db = require('../../db.js');

module.exports = function(record) {
	
	var User = db.define("user", {
		id : {type : 'serial', key : true},
		user_id : {type : 'text'},
		juus_token : {type : 'text'},
		first_name : {type : 'text'},
		last_name: {type : 'text'},
		email : {type : 'text'},
		phone_num : {type : 'integer'},
		time_created: {type : 'time'},
		methods : {
			fullName : function() {
				return this.first_name + ' ' + this.last_name;
			}
		}
	});

	User.create(record, function(err, results){

	});

	User.find(record, function(err, results) {

	});

	User.delete(record, function(err, results) {

	});

	User.update(record, function(err, results) {

	});

	return User;
};