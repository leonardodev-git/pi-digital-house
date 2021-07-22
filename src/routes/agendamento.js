var express = require('express');
var router = express.Router();
const validingInputs = require('../middlewares/validingInputs')
var agendamentoController = require('../controllers/agendamentoController')

router.post('/', validingInputs.inputsValidationSignin(), agendamentoController.createSchedule);

module.exports = router;
