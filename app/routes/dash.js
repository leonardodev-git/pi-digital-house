var express = require('express');
var router = express.Router();
var controller = require('../controllers/dash-controller')


/* GET users listing. */
router.get('/', controller.index);

module.exports = router;
