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
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        type: Sequelize.DATE
      },
     title: {
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