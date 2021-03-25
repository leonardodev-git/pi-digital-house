const listaBarbeiro = require('../dataBaseSimulation/bd')

const listarProfissionais = () => {
  let lista = []
  for (let i = 0; i < listaBarbeiro.length; i++) {
    lista.push(listaBarbeiro[i])
  }
  return lista

}

module.exports = {
  listarProfissionais,
}
