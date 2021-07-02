const { v4: uuidv4 } = require('uuid');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profissionais extends Model {

    static associate(models) {
      Profissionais.hasMany(models.Agendamentos);
      Profissionais.hasMany(models.Servicos, { foreignKey: "profissional_ID" });

    }
  };
  Profissionais.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    avatar: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profissionais',
  });
  return Profissionais;
};

