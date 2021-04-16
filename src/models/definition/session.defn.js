import Sequelize from 'sequelize'

export default {
  opt: {
    engine: 'InnoDB',
    tableName: 'Sessions'
  },
  attr: {
    sid: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    expires: Sequelize.DATE,
    data: Sequelize.TEXT
  }
}