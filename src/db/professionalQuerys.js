const { Profissionais, Servicos } = require('../models');
const treatData = require('./treatData')

const listAll = () => Profissionais.findAll()

let getProfissional = (paramId) => {
    return Profissionais.findOne({
        where: {
            id: paramId
        }, include: [{
            model: Servicos,
            attributes: ['nome']

        }]
    })
}


module.exports = {
    listAll,
    getProfissional,
}