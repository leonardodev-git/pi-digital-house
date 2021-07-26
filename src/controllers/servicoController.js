const teste = (req, res) => {
  const agendamento = [];
  agendamento.push(req.body);
};

const events = async (req, res) => {
  const { start, end, title } = req.body; //como pegar esse cara

  return {
    title,
    start,
    end,
  };
};

module.exports = {
  teste,
  events,
};
