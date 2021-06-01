var express = require('express');
var router = express.Router();
const validingInputs = require('../middlewares/validingInputs')
var loginController = require('../controllers/loginController')

router.post('/', validingInputs.inputsValidationSignin(), loginController.authUser);

module.exports = router;
