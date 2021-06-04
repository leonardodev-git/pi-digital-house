const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')


//Renders the home page
const index = (req, res) => {
  res.render('index')
}

// the function 'newUser' creates a new user in data base.
const newUser = async (req, res) => {
  const { nome, sobrenome, email, senha } = req.body;

  let errors = validationResult(req);

  if (errors.isEmpty()) {
    // const userExists searches in database if the e-mail exists,
    // its return will be an object or null.
    const userExists = await Clientes.findOne({
      where: {
        email: email
      }
    })

    //if userExists is null, we'll create a new user in database and redirect to login page.
    if (!userExists) {
      let newUser = {
        nome,
        sobrenome,
        email,
        senha: bcrypt.hashSync(senha, 10),
      };
      await Clientes.create(newUser)
      res.redirect("login");
    }
    //if userExists, we'll render the index page, with an error message.
    if (userExists) {
      let errorBD = [{ msg: `Email: ${userExists.email}, já possui cadastro` }]
      res.render('index', { errors: errorBD });
    }
  }

  res.render('index', { errors: errors.errors });
}


module.exports = {
  index,
  newUser,

}