const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')

// the fuctions newUser create new use in data base.
const newUser = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  const salt = 10

  let errors = validationResult(req);

  if (errors.isEmpty()) {
    let newUser = {
      nome,
      sobrenome,
      email,
      senha: bcrypt.hashSync(senha, salt),
    };
    await Clientes.create(newUser)
    res.status(200).json({ newUser });
  }

  res.status(400).json({ errors: errors.errors })
}


module.exports = {
  newUser,
}