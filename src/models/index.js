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

config.createTable && Object.values(models)
  .forEach(model => model.sync({ force: config.forceSync }))

export default sequelize
