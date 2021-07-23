const { v4: uuidv4 } = require('uuid');
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Agendamentos extends Model {

    static associate(models) {

    }
  };
  Agendamentos.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      defaultValue: () => uuidv4(),
    },
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Agendamentos',
  });
  return Agendamentos;
};