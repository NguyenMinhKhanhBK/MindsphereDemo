var express = require('express');
var router = express.Router();

/* GET map page. */
router.get('/', function(req, res, next) {
  res.render('mapPage', { title: 'Express' });
});


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('homePage', { title: 'Express' });
});

module.exports = router;
