var express = require('express');
var router = express.Router();
let auth = require('../middlewares/auth')
var dashController = require('../controllers/dashController')



/* GET users listing. */
router.get('/', auth.auth, dashController.index);
router.get('/:nome', auth.auth, dashController.agendamento);

module.exports = router;
