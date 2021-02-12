import app from './app'
import sequelize from './models'
import db from './configs/database'
import { PORT } from './configs/core'

const init = async () => {
  if (db.authenticate) {
    await sequelize.authenticate()
    console.log('Database connected')
  }

  const server = app.listen(PORT)

  server.on('listening', () => {
    console.log(`App running on port ${PORT}...`)
  })
}

init()
