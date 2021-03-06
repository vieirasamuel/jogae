'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
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
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // cidade: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'cidades', key: 'id' },
      // },
      // estado: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'estados', key: 'id' },
      // },
      // pais: {
      //   type: Sequelize.INTEGER,
      //   references: { model: 'paises', key: 'id' },
      // },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isactive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('users');
  },
};
