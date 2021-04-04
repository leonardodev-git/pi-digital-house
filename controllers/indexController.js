const modelsIndex = require('../models/modelsIndex')
const { validationResult } = require('express-validator');



const index = (req, res) => {
  res.render('index')
}


const newUser = (req, res) => {
  const { email } = req.body;
  let errors = validationResult(req);
  if (errors.isEmpty()) {
    modelsIndex.saveUser(req.body);
    res.redirect("login");
  }
  res.render('index', { errors: errors.errors });
}


module.exports = {
  index,
  newUser,
  
}