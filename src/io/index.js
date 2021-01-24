import socketio from 'socket.io'
import events from './events'

export default (server) => {
  const io = socketio(server)

  io.on('connection', (socket) => {
    const evtList = Object.keys(events)

    evtList.map(evtName => {
      socket.on(evtName, data => {
        try {
          const evtHandler = events[evtName]
          evtHandler(socket, data, io)
        } catch (err) {
          socket.emit('HANDLE_ERROR', { error: err.message })
        }
      })
    })
  })

  return io
}