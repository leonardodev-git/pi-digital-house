const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Servicos', [{
      id: uuidv4(),
      nome: 'Barba',
      preco: 30,
      profissional_ID: '57441633-887e-459b-aba4-837cede9b3f6',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: uuidv4(),
      nome: 'Barba',
      preco: 30,
      profissional_ID: '9018fd56-70ff-465e-969e-52e23848fd9b',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: uuidv4(),
      nome: 'Barba',
      preco: 30,
      profissional_ID: '6c551a16-f966-4849-bd1e-a103fc4f381a',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: uuidv4(),
      nome: 'Corte',
      preco: 30,
      profissional_ID: '57441633-887e-459b-aba4-837cede9b3f6',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: uuidv4(),
      nome: 'Corte',
      preco: 30,
      profissional_ID: '9018fd56-70ff-465e-969e-52e23848fd9b',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: uuidv4(),
      nome: 'Corte',
      preco: 30,
      profissional_ID: '6c551a16-f966-4849-bd1e-a103fc4f381a',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
