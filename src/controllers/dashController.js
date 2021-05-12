const listar = require('../../modelsOld/Dash');
const { Profissionais, Servicos } = require('../models');

listaProTratada = (profissionais) => {
  newList = []
  for (profissional of profissionais) {
    newList.push({
      id: profissional.id,
      nome: profissional.dataValues.nome + " " + profissional.dataValues.sobrenome,
      avatar: profissional.dataValues.avatar
    })

  }
  return newList
}
// ---------------------------------------------------------
let getProfissional = (paramId) => {
  return Profissionais.findOne({
    where: {
      id: paramId,

    }, include: [{
      model: Servicos,
      attributes: ['nome']

    }]
  })
}

let informacaoDoProfissional = (dados) => {

  let listaServicos = []
  for (servico of dados.dataValues.Servicos) {
    listaServicos.push(servico.dataValues.nome)
  }
  return {
    id: dados.dataValues.id,
    nome: dados.dataValues.nome + " " + dados.dataValues.sobrenome,
    avatar: dados.dataValues.avatar,
    servicos: listaServicos
  }

}
// ---------------------------------------------------------


const index = async (req, res) => {
  const lista = await Profissionais.findAll()
  profissionais = listaProTratada(lista)

  //let lista = listar.listarProfissionais()
  res.render('dash', { barbeiros: profissionais, userSession: req.session.userSession });
}

const agendamento = async (req, res) => {

  let dadosProfissional = await getProfissional(req.params.nome)
  let informacoes = informacaoDoProfissional(dadosProfissional)

  res.render('agendamento', { barbeiro: informacoes, servicos: informacoes.servicos, userSession: req.session.userSession });
}
ran

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
