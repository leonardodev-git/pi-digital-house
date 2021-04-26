'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissional extends Model {

    static associate(models) {
      Profissional.belongsToMany(models.clientes, { through: 'Agendamento' });
    }
  };
  Profissional.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profissional',
  });
  return Profissional;
};

