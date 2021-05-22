const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')

// the fuctions newUser create new use in data base.
const create = async (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
        const salt = 10
        const { nome, sobrenome, email, senha } = req.body;
        let newUser = {
            nome,
            sobrenome,
            email,
            senha: bcrypt.hashSync(senha, salt),
        };
        await Clientes.create(newUser)
        res.status(201).json({ message: "Users successfully created!" });
    }
    res.status(400).json({ messenger: errors.errors })
}

module.exports = {
    create,
}
