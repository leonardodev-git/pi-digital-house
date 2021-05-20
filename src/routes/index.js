var express = require('express');
const auth = require('../middlewares/auth')
var router = express.Router();
const indexController = require('../controllers/indexController')




/* GET home page. */

router.post("/", auth.dateValidation(), indexController.newUser)


module.exports = router;
