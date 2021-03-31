const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const authUser = (req, res) => {
  const user = modelsLogin.userValidation(req.body);
  if (user.status) {
    req.session.userSession = user;
    return res.redirect('/dash')
  }
  // const msg = {
  //   usuario: 'Usuário inválido',
  //   senha: 'Senha inválida'
  // }

  return res.render('agendamento', { msg: user.msg });


}

module.exports = {
  index,
  authUser,
};