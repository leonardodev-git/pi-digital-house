const listar = require('../modelsOld/Dash')

const index = (req, res) => {
  let lista = listar.listarProfissionais()
  res.render('dash', { barbeiros: lista, userSession: req.session.userSession });
}

const agendamento = (req, res) => {
  let teste = req.params
  let lista = listar.listarProfissionais()
  res.render('agendamento', { barbeiros: lista, userSession: req.session.userSession, teste: teste.nome });
}

const checkout = (req, res) => {
  let teste = req.params
  console.log(teste)

  let lista = listar.listarProfissionais()
  res.render('checkout', { barbeiros: lista, userSession: req.session.userSession })
}

const confirm = (req, res) => {
  res.render('ServiceConfirm')
}



module.exports = {
  index,
  agendamento,
  checkout,
  confirm,
};