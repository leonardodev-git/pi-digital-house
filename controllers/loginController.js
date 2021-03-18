const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const enter = (req, res)=>{
  const user = modelsLogin.userValidation(req.body);
  if(user){
    req.session.userSession = user;
     return res.redirect('/dash')
  }
  return res.send('Usuario ou senha invalido');

  
}

module.exports = { 
  index,
  enter,
};