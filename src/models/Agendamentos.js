'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamentos extends Model {

    static associate(models) {
      Agendamentos.belongsTo(models.Servicos, { foreignKey: 'Profissional_ID' });
      Agendamentos.belongsTo(models.Clientes, { foreignKey: 'Cliente_ID' });
      Agendamentos.belongsTo(models.Profissionais, { foreignKey: 'Servico_ID' });

    }
  };
  Agendamentos.init({
    Start: DataTypes.DATE,
    End: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Agendamentos',
  });
  return Agendamentos;
};