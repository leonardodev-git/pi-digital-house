const { v4: uuidv4 } = require('uuid');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Servicos extends Model {

    // lugar de fazer a lógica para pegar os eventos no banco.

    static associate(models) {
      Servicos.hasMany(models.Agendamentos);
      Servicos.belongsTo(models.Profissionais, { foreignKey: 'Profissional_ID' });
    }
  };
  Servicos.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    nome: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Servicos',
  });
  return Servicos;
};
