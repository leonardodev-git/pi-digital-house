var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator');
const indexController = require('../controllers/indexController')

/* GET home page. */
router.get('/', indexController.index)  
router.post("/",[
    check("email").isEmail().withMessage("Email invalido"),
    body("email").custom((email) => {
        return indexController.searchForUser(email);
      }).withMessage("Email já cadastrado!"),
    check("senha").isLength({ min: 3 }).withMessage("Senha deve conter mínimo 6 caracteres")
  ],indexController.newUser
);  




module.exports = router;
