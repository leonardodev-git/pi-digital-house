const { v4: uuidv4 } = require('uuid');
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
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    Start: DataTypes.DATE,
    End: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Agendamentos',
  });
  return Agendamentos;
};