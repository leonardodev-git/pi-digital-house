var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login')

/* GET users listing. */
router.get('/', loginController.index);

module.exports = router;
