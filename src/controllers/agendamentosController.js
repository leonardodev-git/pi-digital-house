const model = require("../model/agendamentoModel");

const create = async (req, res) => {
    const { Start, End, Valor_Total, Profissional_ID, Cliente_ID, Servico_ID } = (req.body);
    await model.create({ Start, End, Valor_Total, Profissional_ID, Cliente_ID, Servico_ID });
    res.status(200).json({ message: "Agendamento successfully created!" });
}

const destroy = async (req, res) => {
    const { id } = req.params;
    await model.destroy(id);
    res.status(200).json({ message: "Agendamento successfully deleted!" });
}

const update = async (req, res) => {
    const { id } = req.params;
    const { Start, End } = req.body;
    await model.update(id, Start, End);
    res.status(204).json({ message: "Agendamento successfully updated!" });
}

module.exports = {
    create,
    destroy,
    update
}