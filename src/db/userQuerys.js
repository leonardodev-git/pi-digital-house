const { Clientes } = require('../models');


const searchUsers = async (email) => await Clientes.findOne({
    where: {
        email: email
    }
})




module.exports = {
    searchUsers,
}