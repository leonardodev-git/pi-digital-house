var express = require('express');
var router = express.Router();
const validingInputs = require('../middlewares/validingInputs')
const verifySignin = require('../middlewares/verifySignup')
var loginController = require('../controllers/loginController')

router.post('/', validingInputs.inputsValidationSignin(), loginController.authUser);

module.exports = router;
