var express = require('express');
var router = express.Router();

const validingInputs = require('../middlewares/validingInputs')
const verifySignup = require('../middlewares/verifySignup')
const usersController = require('../controllers/usersController')

router.post("/", [verifySignup.checkUserExist, validingInputs.dateValidation()], usersController.create)

module.exports = router;