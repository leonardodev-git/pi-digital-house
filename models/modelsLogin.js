const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
//caminho para o arquivo .json
const filePath = path.join('dataBaseSimulation', 'dataBaseUsers.json');

//ler arquivo .json e converte converte em array de usuarios, e retorna o usuario pesquisado
const getDataBaseUsers = (email) => {
    const users = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf-8' }))
    return users.find(user => user.email === email)
}

const userValidation = (reqBody) => {

    const { email, senha } = reqBody
    let user = getDataBaseUsers(email)

    if (!user) {
        return { msg: "Email errado", status: false }
    }

    if (!bcrypt.compareSync(senha, user.senha)) {
        return { msg: "Senha errada", status: false }
    }

    return { nome: user.nome + ' ' + user.sobrenome, email: user.email, status: true }

}



module.exports = {
    userValidation,
}
