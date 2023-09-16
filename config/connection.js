require('dotenv').config(); // This loads the environment variables from .env file
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: process.env.NODE_ENV === 'development' // Log only in development mode
  }
);

module.exports = sequelize;
