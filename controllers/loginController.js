const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const login = (req, res)=>{
  
  let user = modelsLogin.login(req.body)
  user?res.redirect('dash'):res.send('Usuario e senha invalido')
  
}

module.exports = { 
  index,
  login,
};