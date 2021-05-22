const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const search = require('../db/userQuerys')


const authUser = async (req, res) => {
  const { email, senha } = req.body
  const usuarioValidation = await search.searchUsers(email)

  let errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ messenge: errors.errors })
  }

  if (!usuarioValidation) {
    res.status(400).json({ messenge: "Email not found!" })
  }

  if (!bcrypt.compareSync(senha, usuarioValidation.senha)) {
    return res.status(400).json({ messenge: "invalid password" })

  }
  return res.status(200).json({
    message: "successfully connected",
    user: usuarioValidation.nome + ' ' + usuarioValidation.sobrenome,
    email: usuarioValidation.email
  })
}




module.exports = {
  authUser,
};