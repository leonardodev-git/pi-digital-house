const teste = (req, res) => {
  const agendamento = [];
  agendamento.push(req.body);
};

const events = async (req, res) => {
  const { start, end } = req.body; //como pegar esse cara

  const createEvent = {
    title,
    startt,
    endd,
  };

  return createEvent;
};

module.exports = {
  teste,
  events,
};
