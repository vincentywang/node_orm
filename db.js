var orm = require('orm');

var db = orm.connect('mysql://root:password@192.168.55.102/test');

db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);

  // connected
  // ...
});