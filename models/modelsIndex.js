const fs = require('fs');
const path = require('path')
const bcrypt = require('bcrypt');

//caminho para o arquivo .json
//const filePath = join(__dirname, "/../bdTeste/", "receitas.json");
const filePath = path.join('dataBaseSimulation', 'tableOfUsers.json');


const getUsers = ()=>{
    const data = fs.existsSync(filePath)?fs.readFileSync(filePath):[]

    try{
        return JSON.parse(data)
    }catch(error){
        return[]
    }
}

const saveUserJson = (users)=>{
    fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))
}

const saveUser = (item) => {
    let dateNewUser = {
        nome: item.nome,
        sobrenome: item.sobrenome,
        email: item.email,
        senha:bcrypt.hashSync(item.senha, 10),
    }
    const users = getUsers()
    users.push(dateNewUser)
    saveUserJson(users)
          
  }

  module.exports= {
      saveUser
  }

