const express = require('express');
const router = express.Router();
const { check, validationResult, body } = require('express-validator');
const indexController = require('../controllers/indexController')


const dateValidation = [
  check("email").isEmail().withMessage("Email invalido"),
  check("senha").isLength({ min: 3 }).withMessage("Senha deve conter mínimo 3 caracteres")
]

/* GET home page. */
router.get('/', indexController.index)
router.post("/", dateValidation, indexController.newUser)






module.exports = router;
