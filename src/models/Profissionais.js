'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissionais extends Model {

    static associate(models) {
      Profissionais.hasMany(models.Agendamentos);

    }
  };
  Profissionais.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profissionais',
  });
  return Profissionais;
};

