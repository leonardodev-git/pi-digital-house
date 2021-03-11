const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const login = (req, res)=>{
  let{email, senha}= req.body
  let user = modelsLogin.login(email)
  if(user.email === email && user.senha=== senha){
    res.redirect('dash')
  }else{
    res.send('Usuario e senha invalido')
  }
}

module.exports = { 
  index,
  login,
};