const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
//caminho para o arquivo .json
const filePath = path.join('dataBaseSimulation', 'dataBaseUsers.json');
//ler arquivo .json e converte converte em array de usuarios, e retorna o usuario pesquisado
const getDataBaseUsers = (email)=> {
    const users = JSON.parse(fs.readFileSync(filePath,{encoding: 'utf-8'}))
    return users.find(user=> user.email === email )
}

const userValidation = (reqBody)=>{
    const {email, senha} = reqBody
    const user = getDataBaseUsers(email)
    if(!user || !bcrypt.compareSync(senha, user.senha)){
      return false
    }
    let ofSession = {nome:user.nome+' '+ user.sobrenome, email:user.email}
    return ofSession
}

module.exports = {
    userValidation,
}
