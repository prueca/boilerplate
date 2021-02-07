import app from './app'
import { PORT } from './configs/core'

const server = app.listen(PORT)

server.on('listening', () => {
  console.log(`App running on port ${PORT}...`)
})