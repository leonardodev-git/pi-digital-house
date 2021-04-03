const listar = require('../models/dashModels')

const index = (req, res) => {
  let lista = listar.listarProfissionais()
  res.render('dash', { barbeiros: lista, userSession: req.session.userSession });
}

const agendamento = (req, res) => {
  let lista = listar.listarProfissionais()
  res.render('agendamento', { barbeiros: lista, userSession: req.session.userSession });
}

const checkout = (req, res) => {
  res.render('checkout')
}



module.exports = {
  index,
  agendamento,
  checkout,
};