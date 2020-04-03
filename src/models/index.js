import Sequelize from 'sequelize';
import {
  DB_NAME,
  DB_USER,
  DB_PASS,
  DB_HOST,
  DB_PORT,
  DB_DIALECT
} from '../configs/app';

import schema from './schema';

export const conn = new Sequelize(
  DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT,
    dialect: DB_DIALECT
  });

const models = {};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

if (process.env.DB_SYNC == 1) {
  conn.sync({ force: true });
}

export default models;