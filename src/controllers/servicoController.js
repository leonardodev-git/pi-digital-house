const { default: axios } = require('axios');
const { Servico } = require('../models');

const teste = (req, res) => {
  const agendamento = [];
  agendamento.push(req.body)
  console.log(agendamento)

}

const events = async (req, res) => {
  const { start, end } = req.body //como pegar esse cara

  const createEvent = {
    title,
    startt,
    endd,
  };

  return createEvent;
}



module.exports = {
  teste,
  events
};