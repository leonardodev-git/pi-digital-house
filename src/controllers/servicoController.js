const teste = (req, res) => {
  const agendamento = [];
  agendamento.push(req.body);
};

const events = async (req, res) => {
  const { start, end, title } = req.body; //como pegar esse cara

  const createEvent = {
    title,
    start,
    end,
  };

  return createEvent;
};

module.exports = {
  teste,
  events,
};
