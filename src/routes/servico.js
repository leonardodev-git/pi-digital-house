var express = require('express');
var router = express.Router();
const servicoController = require('../controllers/servicoController');


//localhost:5000/servico
router.post('/agendar', servicoController.teste);


module.exports = router;