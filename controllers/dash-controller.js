const listar = require('../models/dashModels')

const index = (req, res) => {
  let lista = listar.listarProfissionais()
  console.log(lista)
  res.render('dash', { barbeiros: lista });
}

module.exports = { index };