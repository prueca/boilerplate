import Sequelize from 'sequelize'
import config from '../configs/database'
import schema from './schema'

const sequelize = new Sequelize(
  config.database,
  config.user,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: config.dialect
  }
)

const models = {
  // initialize models here
}

Object.values(models)
  .filter(model => typeof model.associate === 'function')
  .forEach(model => model.associate(models))

if (config.createTable || config.alterTable) {
  Object.values(models).map(model => model.sync({
    force: config.forceSync,
    alter: config.alterTable
  }))
}

export default sequelize
