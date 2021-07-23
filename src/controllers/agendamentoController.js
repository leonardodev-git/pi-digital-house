const { Agendamentos } = require("../models");

const createSchedule = async (req, res) => {
  
  try {
        let newSchedule = {
          start: req.body.start,
          end: req.body.end, 
          title: req.body.title
        };
        await Agendamentos.create(newSchedule)
        res.status(200).json({ message: "Schedule successfully created!" });
      }
      catch {
     res.status(400).json({ Error: 'Deu ruim'} )
    }
}
  
  module.exports = {
    createSchedule,
  };
  