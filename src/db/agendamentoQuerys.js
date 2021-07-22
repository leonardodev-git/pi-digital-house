const { Agendamentos } = require('../models');

const listAll = () => Profissionais.findAll()

let getProfissional = (paramId) => {
    return Profissionais.findOne({
        where: {
            id: paramId
        }, include: [{
            model: Agendamentos,
            attributes: ['title']

        }]
    })
}


module.exports = {
    listAll,
    getProfissional,
}