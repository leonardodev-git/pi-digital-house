const { Servico } = require('../models');

const teste = (req, res) => {
  res.json(req.body)
  res.send('testando a rota')
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