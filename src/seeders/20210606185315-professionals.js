const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Profissionais', [{
      id: '57441633-887e-459b-aba4-837cede9b3f6',
      nome: 'Bruno',
      sobrenome: 'Guedes',
      avatar: 'https://bit.ly/2SKi5HZ',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: '9018fd56-70ff-465e-969e-52e23848fd9b',
      nome: 'Leonardo',
      sobrenome: 'Magalhães',
      avatar: 'https://bit.ly/35HaQ6n',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: '6c551a16-f966-4849-bd1e-a103fc4f381a',
      nome: 'Eduardo',
      sobrenome: 'Amorim',
      avatar: 'https://bit.ly/2TNM162',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "6fa577c3-538b-40a1-82b1-2d5e8f11bd49",
      nome: 'Guilherme',
      sobrenome: 'Totoli',
      avatar: 'https://bit.ly/3gHnAjD',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "e35ebdc8-ff06-43be-aa5f-f957093ba4d0",
      nome: 'Jonas',
      sobrenome: 'Lobo',
      avatar: 'https://bit.ly/3d32av5',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "9c4b2fb5-502e-4e3a-8576-dffda9998078",
      nome: 'João',
      sobrenome: 'Marcos',
      avatar: 'https://bit.ly/2SS71se',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "003749d1-aa24-4dc9-9327-596fa54a3e7d",
      nome: 'Renato',
      sobrenome: 'Napoli',
      avatar: 'https://bit.ly/3xx8Olc',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "5d732d8c-3c8c-46dc-9829-dd261a58f98d",
      nome: 'Julia',
      sobrenome: 'Ramos',
      avatar: 'https://bit.ly/3cZDHqD',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    },
    {
      id: "dd41ee1e-8b48-4675-a7cb-da7ff590a6ca",
      nome: 'Pedro',
      sobrenome: 'Braga',
      avatar: 'https://bit.ly/3gZlrP4',
      createdAt: '2021-06-06 18:30:22',
      updatedAt: '2021-06-06 18:30:22'
    }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
