var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

/* GET users listing. */
router.get('/', loginController.index);
router.post('/', loginController.login);

module.exports = router;
