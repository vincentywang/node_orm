var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('get user');
});

router.get('/add', function(req, res, next) {
	res.send('add new user');
});

router.get('/update', function(req, res, next) {
	res.send('update user');
});

router.get('/delete', function(req, res, next) {
	res.send('delete user');
});

module.exports = router;
