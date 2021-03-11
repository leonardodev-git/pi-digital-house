const listar = require('../models/dashModels')

const index = (req, res) => {
  let lista = listar.listarProfissionais()
  res.render('dash', { barbeiros: lista });
}

module.exports = { index };