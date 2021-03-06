var express = require('express');
var router = express.Router();
var dashcontroller = require('../controllers/dash-controller')


/* GET users listing. */
router.get('/', dashcontroller.index);

module.exports = router;
