const {Agendamentos} = require('../bd_models');

let procurarAgendamento = async (paramId) => {
    return await Agendamentos.findByPk(paramId)
}

const novoAgendamento = async (params) => {
    await Agendamentos.create(params);
}
const destroy = async (paramId) => {
    await Agendamentos.destroy({
        where: {
            id: paramId
        }
    });
}

const update = async (id, start, end) => {
    const agendamento = await procurarAgendamento(id);
    console.log(id)
    agendamento.Start = start;
    agendamento.End = end;
    await agendamento.save();
}

module.exports = {
    novoAgendamento,
    destroy,
    update
}