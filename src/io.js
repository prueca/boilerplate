import socketio from 'socket.io';
import events from './events';

export default (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    const evtList = Object.keys(events);

    evtList.forEach((evtName) => {
      socket.on(evtName, (data) => {
        const evtHandler = events[evtName];
        evtHandler(socket, data, io);
      });
    });
  });

  return io;
};