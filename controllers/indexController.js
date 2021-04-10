const modelsIndex = require('../modelsOld/modelsIndex')
const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')



const index = (req, res) => {
  res.render('index')
}


const newUser = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;
  const salt = 10

  const verificaUsers = await Clientes.findOne({
    where: {
      email: email
    }
  })
  if (verificaUsers === null) {
    let newUser = {
      nome,
      sobrenome,
      email,
      senha: bcrypt.hashSync(senha, salt),
    };
    await Clientes.create(newUser)
  }
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    modelsIndex.saveUser(req.body);
    res.redirect("login");
  }
  res.render('index', { errors: errors.errors });
}


module.exports = {
  index,
  newUser,

}