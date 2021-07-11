var express = require('express');
var router = express.Router();
let auth = require('../middlewares/validingInputs')
var dashController = require('../controllers/dashController')



/* GET users listing. */
router.get('/', auth.auth, dashController.index);
router.get('/checkout/confirm', auth.auth, dashController.confirm)
router.get('/:nome/checkout', auth.auth, dashController.checkout);
router.get('/:nome', auth.auth, dashController.agendamento);



module.exports = router;
