const { validationResult } = require('express-validator');
const { Clientes } = require('../models');
const bcrypt = require('bcrypt')
const userQuery = require('../db/userQueries')


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

const deletar = async (req, res) => {
    try {
        await userQuery.deletar(req.userId)
        res.status(200).json({ message: "Users successfully deleted!", front: "Que pena, espero que volte em breve!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }

}
const update = async (req, res) => {

    try {
        await userQuery.update(req.body, req.userId)
        res.status(200).json({ message: "Users successfully update!", front: "Os seus dados foram atualizados!" });
    } catch (error) {
        res.status(500).json({ message: error });
    }

}

module.exports = {
    create,
    deletar,
    update
}

