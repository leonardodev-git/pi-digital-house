//const listar = require('../../modelsOld/Dash');
const { Profissionais } = require('../models');

listaProTratada = (profissionais) => {
  newList = []
  for (profissional of profissionais) {
    newList.push({
      nome: profissional.dataValues.nome + " " + profissional.dataValues.sobrenome,
      avatar: profissional.dataValues.avatar
    })

  }
  return newList
}



const index = async (req, res) => {
  const lista = await Profissionais.findAll()
  profissionais = listaProTratada(lista)

  //let lista = listar.listarProfissionais()
  res.render('dash', { barbeiros: profissionais, userSession: req.session.userSession });
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
}
