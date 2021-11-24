'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('events', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      uuid: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      local: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      pais: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      modalidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      organizador: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      data: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      imagem: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      valor: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      jogadores: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      espectadores: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('events');
  },
};
