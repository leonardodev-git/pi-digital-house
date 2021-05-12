//const modelsLogin = require('../modelsOld/Login')
const { Clientes } = require('../models');
const bcrypt = require('bcrypt');
// const { userValidation } = require('../../modelsOld/Login');

const index = (req, res) => {
  res.render('login');
}

const loginUser = (dadosForm, req) => {
  const { email, senha } = req.body
  if (dadosForm === null) {
    return { msg: "Email errado", status: false }
  }

  if (!bcrypt.compareSync(senha, dadosForm.senha)) {
    return { msg: "Senha errada", status: false }
  }
  return {
    status: true
  }
}

const authUser = async (req, res) => {
  // const user = modelsLogin.userValidation(req.body);
  const usuarioValidation = await Clientes.findOne({
    where: {
      email: req.body.email
    }
  })
  const user = loginUser(usuarioValidation, req);
  if (user.status) {
    delete usuarioValidation.senha
    req.session.userSession = usuarioValidation;
    return res.redirect('/dash')
  }

  return res.render('login', { msg: user.msg });


}

module.exports = {
  index,
  authUser,
};