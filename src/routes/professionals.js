var express = require('express');
var router = express.Router();
// let auth = require('../middlewares/validingInputs')
var profissionalsController = require('../controllers/professionalsController')

router.get('/all', profissionalsController.all)
router.get('/:id', profissionalsController.details)

module.exports = router;