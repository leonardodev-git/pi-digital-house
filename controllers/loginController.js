const modelsLogin = require('../models/modelsLogin')

const index = (req, res) => {
  res.render('login');
}

const enter = (req, res)=>{
  const user = modelsLogin.userValidation(req.body)
  user?res.redirect('dash'):res.send('Usuario e senha invalido')
  
}

module.exports = { 
  index,
  enter,
};