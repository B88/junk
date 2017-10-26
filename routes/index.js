var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/doit', function(req, res, next) {
    res.render('doit', { title: 'Do it' });
});

router.get('/doit2', function(req, res, next) {
    res.render('doit2', { title: 'Do it2' });
});

module.exports = router;
