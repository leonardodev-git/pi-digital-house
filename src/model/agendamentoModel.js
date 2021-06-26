const Agendamentos = require('../bd_models');

const agendamento = async (paramId) => {
    return await Agendamentos.findOne({
        where: {
            id: paramId
        }
    })
}

const create = async ({info}) => {
    await Agendamentos.create({info})
}

const destroy = async (paramId) => {
    await Agendamentos.destroy({
        where: {
            id: paramId
        }
    });
}

const update = async (id, start, end) => {
    const agendamento = agendamento(id);
    agendamento.Start = start;
    agendamento.End = end;
}

module.exports = {
    create,
    destroy,
    update
}