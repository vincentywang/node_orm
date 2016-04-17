var orm = require('orm');

var db = orm.connect('mysql://root:password@localhost/test');

db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);

  // connected
  // ...
});