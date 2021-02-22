import app from './app'
import sequelize from './models'
import db from './configs/database'
import io from './io'
import { PORT } from './configs/core'

const init = async () => {
  if (db.authenticate) {
    await sequelize.authenticate()
    console.log('Database connected')
  }

  const server = app.listen(PORT)
  const socketio = io(server)
  const succMsg = `App running on port ${PORT}...`

  app.locals.io = socketio
  server.on('listening', () => console.log(succMsg))
}

init()
