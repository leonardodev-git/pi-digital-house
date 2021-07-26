const { Clientes } = require('../models');
const _ = require('lodash');


const searchUsers = async (email) => await Clientes.findOne({
    where: {
        email: email
    }
})

const deletar = async (id) => await Clientes.destroy({
    where: {
        id: id
    }
});

const update = async (params, userId) => await Clientes.update(_.pickBy({
        nome: params.nome,
        sobrenome: params.sobrenome,
        email: params.email
    }, _.identity()),

    {
        where: {
            id: userId
        }
    });



module.exports = {
    searchUsers,
    deletar,
    update
}