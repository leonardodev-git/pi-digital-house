const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
//caminho para o arquivo .json
const filePath = path.join('dataBaseSimulation', 'tableOfUsers.json');
//ler arquivo .json e converte para objeto literal
const tableOfUsers = JSON.parse(fs.readFileSync(filePath,{encoding: 'utf-8'}))

const login = (reqBody)=>{
    let userFilter = tableOfUsers.find(user=> user.email === reqBody.email )
    return userFilter = userFilter.email === reqBody.email && bcrypt.compareSync(reqBody.senha, userFilter.senha)? true: false
}

module.exports = {
    login,
}
