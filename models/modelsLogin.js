const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');
//caminho para o arquivo .json
const filePath = path.join('dataBaseSimulation', 'tableOfUsers.json');
const tableOfUsers = JSON.parse(fs.readFileSync(filePath,{encoding: 'utf-8'}))
// const getUsers = ()=>{
//     const data = fs.existsSync(filePath)?fs.readFileSync(filePath):[]

//     try{
//         return JSON.parse(data)
//     }catch(error){
//         return[]
//     }
// }

const login = (reqBody)=>{
    let userFilter = tableOfUsers.find(user=> user.email === reqBody.email )
    return userFilter = userFilter.email === reqBody.email && bcrypt.compareSync(reqBody.senha, userFilter.senha)? true: false
}

module.exports = {
    login,
}
