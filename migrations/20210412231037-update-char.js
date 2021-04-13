'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'nome', {
      type: Sequelize.STRING(50),
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('Clientes', 'nome', {
      type: Sequelize.STRING,
    });

  }
};

