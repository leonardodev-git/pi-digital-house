var express = require('express');
var router = express.Router();

const validingInputs = require('../middlewares/validingInputs')
const verifySignup = require('../middlewares/verifySignup')
const usersController = require('../controllers/usersController')
const jwtAuth = require('../middlewares/jwtAuth');



router.post("/", [verifySignup.checkUserExist, validingInputs.dateValidation()], usersController.create)
router.delete("/", jwtAuth.verifyToken, usersController.deletar)
router.put("/", jwtAuth.verifyToken, usersController.update)

module.exports = router;