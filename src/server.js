import app from './app';
import { PORT } from './configs/app';

const server = app.listen(PORT);

server.on('listening', () => {
  console.log(`Server listening on port ${PORT}...`);
});