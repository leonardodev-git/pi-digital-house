const { v4: uuidv4 } = require('uuid');
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Servicos', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        defaultValue: uuidv4()
      },
      nome: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.FLOAT
      },
      profissional_ID: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Profissionais',
          key: 'id'
        }
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
    await queryInterface.dropTable('Servicos');
  }
};