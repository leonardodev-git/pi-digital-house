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
<<<<<<< HEAD
  // const msg = {
  //   usuario: 'Usuário inválido',
  //   senha: 'Senha inválida'
  // }

=======
  
>>>>>>> 6c78d57b348c831f56667b8728897b3ace6bc504
  return res.render('login', { msg: user.msg });


}

module.exports = {
  index,
  authUser,
};