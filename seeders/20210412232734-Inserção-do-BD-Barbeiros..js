'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Clientes', [{
      name: 'John Doe',
      isBetaMember: false
    }], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
