'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamento extends Model {
    static associate(models) {
      // define association here
    }
  }
  Agendamento.init({
    Data_Horario: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Agendamento',
  });
  return Agendamento;
};