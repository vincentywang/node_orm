var orm = require('orm');

var db = orm.connect('mysql://root:123@192.168.55.108/juus_sys');

db.on('connect', function(err) {
  if (err) return console.error('Connection error: ' + err);

  // connected
  // ...
  console.log('connect successful');
});

module.exports = db;