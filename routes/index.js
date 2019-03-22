var express = require('express');
var router = express.Router();

/* GET map page. */
router.get('/', function(req, res, next) {
  res.render('mapPage', { title: 'Express' });
});


/* GET home page. */
router.get('/motorlogger', function(req, res, next) {
  res.render('motorlogger', { title: 'Express' });
});

/* GET home page. */
router.get('/motor-bklab', function(req, res, next) {
  res.render('motor-bklab', { title: 'Express' });
});

module.exports = router;
