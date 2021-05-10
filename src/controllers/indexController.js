const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')


//Resderiza a pagina inicial do sistema
const index = (req, res) => {
  res.render('index')
}

// the fuctions newUser create new use in data base.
const newUser = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  const salt = 10

  let errors = validationResult(req);

  if (errors.isEmpty()) {
    // const verificaUsers search in data base if e-mail exist, your return  it wll be
    // a object or null.
    const verificaUsers = await Clientes.findOne({
      where: {
        email: email
      }
    })

    //if verificaUsers is null registers new user in data base e redirect for login page.
    if (verificaUsers === null) {
      let newUser = {
        nome,
        sobrenome,
        email,
        senha: bcrypt.hashSync(senha, salt),
      };
      await Clientes.create(newUser)
      res.redirect("login");
    }
    //if verificaUsers is different of null, rederize index page, witc erro message. 
    if (verificaUsers !== null) {
      let errorsBD = [{ msg: `Email: ${verificaUsers.email}, já possui cadastro` }]
      res.render('index', { errors: errorsBD });
    }
  }

  res.render('index', { errors: errors.errors });
}


module.exports = {
  index,
  newUser,

}