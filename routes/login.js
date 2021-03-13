var express = require('express');
var router = express.Router();
var loginController = require('../controllers/loginController')

router.get('/', loginController.index);
router.post('/', loginController.enter);

module.exports = router;
