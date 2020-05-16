import Sequelize from 'sequelize';
import config, { FORCE_SYNC } from '../configs/database';
import schema from './schema';

export const conn = new Sequelize(
  config.DB_NAME,
  config.DB_USER,
  config.DB_PASS,
  {
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DB_DIALECT
  }
);

const models = {
  // initialize models here
};

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models));

Object.values(models)
  .forEach(model => model.sync({ force: FORCE_SYNC }));

export default models;
