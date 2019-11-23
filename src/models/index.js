import Sequelize from 'sequelize';
import {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DIALECT
} from '../configs/app';

export const sequelize = new Sequelize(
  DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  });

const models = {};

if (process.env.DB_SYNC == 1) {
  sequelize.sync({ force: true });
}

export default models;