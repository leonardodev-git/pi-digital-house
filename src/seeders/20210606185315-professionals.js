'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Profissionais', [{
      nome: 'Bruno',
      sobrenome: 'Guedes',
      avatar: '/images/funcionarios/alvaro-dias.png',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Leo',
      sobrenome: 'Guedes',
      avatar: '/images/funcionarios/alvaro-dias.png',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      nome: 'Eduardo',
      sobrenome: 'Guedes',
      avatar: '/images/funcionarios/alvaro-dias.png',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    }
    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
