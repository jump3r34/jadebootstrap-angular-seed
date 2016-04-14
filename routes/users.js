var express = require('express');
var router = express.Router();

// other variable imports
var config = require('../config/config');
var configOther = require('../config/thirdPartyConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: configOther.Azure.storageAccount, author: config.AppAuthor } );
});

/* try something for redirect to angular area. */
router.get('/try', function(req, res, next) {
  res.render('../mainApp/views/mainView', {title: configOther.Azure.storageAccount, author: config.AppAuthor } );
});

module.exports = router;
