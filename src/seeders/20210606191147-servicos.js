const { v4: uuidv4 } = require('uuid');
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Servicos', [
      {
        id: uuidv4(),
        nome: 'Barba',
        preco: 30,
        profissional_ID: '003749d1-aa24-4dc9-9327-596fa54a3e7d',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
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
        profissional_ID: '5d732d8c-3c8c-46dc-9829-dd261a58f98d',
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
        nome: 'Barba',
        preco: 30,
        profissional_ID: '6fa577c3-538b-40a1-82b1-2d5e8f11bd49',
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
        profissional_ID: '9c4b2fb5-502e-4e3a-8576-dffda9998078',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Barba',
        preco: 30,
        profissional_ID: 'dd41ee1e-8b48-4675-a7cb-da7ff590a6ca',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Barba',
        preco: 30,
        profissional_ID: 'e35ebdc8-ff06-43be-aa5f-f957093ba4d0',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '003749d1-aa24-4dc9-9327-596fa54a3e7d',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '57441633-887e-459b-aba4-837cede9b3f6',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '5d732d8c-3c8c-46dc-9829-dd261a58f98d',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '6c551a16-f966-4849-bd1e-a103fc4f381a',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '6fa577c3-538b-40a1-82b1-2d5e8f11bd49',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '9018fd56-70ff-465e-969e-52e23848fd9b',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: '9c4b2fb5-502e-4e3a-8576-dffda9998078',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: 'dd41ee1e-8b48-4675-a7cb-da7ff590a6ca',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      },
      {
        id: uuidv4(),
        nome: 'Corte',
        preco: 50,
        profissional_ID: 'e35ebdc8-ff06-43be-aa5f-f957093ba4d0',
        createdAt: '2021-06-06 18:30:22',
        updatedAt: '2021-06-06 18:30:22'
      }

    ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Clientes', null, {});

  }
};
