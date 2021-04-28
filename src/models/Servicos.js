'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {

    static associate(models) {
      Servicos.hasMany(models.Agendamentos);
    }
  };
  Servicos.init({
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};