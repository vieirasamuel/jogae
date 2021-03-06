const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Event = require('../models/Events');

const connection = new Sequelize(dbConfig);

User.init(connection);
Event.init(connection);

async function testConnection() {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

module.exports = connection;
