const modelsIndex = require('../models/modelsIndex')
const {validationResult } = require('express-validator');

const searchForUser = (email) => {
  const users = modelsIndex.getDataBaseUsers();
  const [user] = users.filter((user) => user.email === email);
  return  user === undefined ? true : false;
  
};

const index = (req, res)=>{
    res.render('index')
}


const newUser = (req, res)=>{
  //userNotExist recebe o valor booleano true caso não exista no banco de dados e false caso exista.
  //se userNotExist for false, informa que usuário ja esta cadastrado, caso contrario prosegue com o cadastro
  //e redireciona para pagina de login.
  const { email } = req.body;
  //const userNotExist = modelsIndex.searchForUser(email);
  // if (!userNotExist) {
  //   res.send("Email já cadastrado");
  // }
  let errors = validationResult(req);
  if (errors.isEmpty()) {
  modelsIndex.saveUser(req.body);
  res.redirect("login");
  }
  res.render('index', {errors:errors.errors});
}


module.exports = {
    index,
    newUser,
    searchForUser,
    
}