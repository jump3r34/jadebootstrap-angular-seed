var express = require('express');
var router = express.Router();

// extra imports or variables
var config = require('../config/config');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: config.AppName, author: config.AppAuthor });
});

// This works for variable passing
// router.get('/req/:id', function(req, res, next) {
//   var thisId = req.params.id;
//   res.render('index', { title: config.AppName, author: config.AppAuthor, urlId: thisId });
// });

module.exports = router;
