var express = require('express');
var router = express.Router();
// let auth = require('../middlewares/validingInputs')
var profissionalsController = require('../controllers/professionalsController')
const jwtAuth = require('../middlewares/jwtAuth')

router.get('/all', jwtAuth.verifyToken, profissionalsController.all)
router.get('/:id', jwtAuth.verifyToken, profissionalsController.details)

module.exports = router;