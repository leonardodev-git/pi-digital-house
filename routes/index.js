var express = require('express');
var router = express.Router();
const { check, validationResult, body } = require('express-validator');
const indexController = require('../controllers/indexController')
const indexModel = require('../models/modelsIndex')

const dateValidation = [
  check("email").isEmail().withMessage("Email invalido"),
  body("email").custom((email) => {
    return indexModel.searchForUser(email);
  }).withMessage("Email já cadastrado!"),
  check("senha").isLength({ min: 3 }).withMessage("Senha deve conter mínimo 6 caracteres")
]


/* GET home page. */
router.get('/', indexController.index)
router.post("/", dateValidation, indexController.newUser)






module.exports = router;
