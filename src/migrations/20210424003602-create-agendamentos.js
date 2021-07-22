const { v4: uuidv4 } = require('uuid');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Agendamentos', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
      },
      Start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      End: {
        type: Sequelize.DATE
      },
     TItle: {
       allowNull: false,
       type: Sequelize.STRING
     },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Agendamentos');
  }
};