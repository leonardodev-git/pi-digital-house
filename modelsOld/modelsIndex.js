// const fs = require("fs");
// const path = require("path");
// const bcrypt = require("bcrypt");
// //caminho para o arquivo .json
// const filePath = path.join("dataBaseSimulation", "dataBaseUsers.json");
// const salt = 10;

// const getDataBaseUsers = () => {
//   const data = fs.existsSync(filePath) ? fs.readFileSync(filePath) : [];

//   try {
//     return JSON.parse(data);
//   } catch (error) {
//     return [];
//   }
// };

// const searchForUser = (email) => {
//   const users = getDataBaseUsers();
//   const [user] = users.filter((user) => user.email === email);
//   return user === undefined ? true : false;

// };

// const saveUserDataBase = (users) => {
//   fs.writeFileSync(filePath, JSON.stringify(users));
// };

// const saveUser = (reqBody) => {
//   const { nome, sobrenome, email, senha } = reqBody;
//   const users = getDataBaseUsers();

//   users.push(newUser);
//   saveUserDataBase(users);
// };

// module.exports = {
//   saveUser,
//   getDataBaseUsers,
//   searchForUser,
// };
