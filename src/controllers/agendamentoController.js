const Agendamentos = require("../models/Agendamentos");

const createSchedule = async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        const { Start, End, Title } = req.body;
        let newSchedule = {
          Start,
          End,
          Title,
        };
        await Agendamentos.create(newSchedule)
        res.status(201).json({ message: "Schedule successfully created!" });
    }
    res.status(400).json({ messenger: errors.errors })
}
  
  module.exports = {
    createSchedule,
  };
  