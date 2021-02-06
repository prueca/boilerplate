import app from './app'
import { PORT } from './configs/app'

const server = app.listen(PORT)

server.on('listening', () => {
  console.log(`App running on port ${PORT}...`)
})