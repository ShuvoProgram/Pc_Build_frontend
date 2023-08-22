/* eslint-disable no-console */
import mongoose from 'mongoose';
import { Server } from 'http';
import config from './config';
import app from './app';

process.on('uncaughtException', error => {
  console.log(error);
  process.exit(1);
});

let server = new Server((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, world!\n');
});

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database is Connected Successfully !!');

    server = app.listen(config.port, () => {
      console.log(`Application is listening on post ${config.port}`);
    });
  } catch (error) {
    console.log('Failed to connect database !!');
  }
  process.on('unhandledRejection', error => {
    if (server) {
      server.close(() => {
        console.log(error);
      });
    } else {
      process.exit(1);
    }
  });
}
bootstrap();

process.on('SIGTERM', () => {
  console.log('SIGTERM is received');
  if (server) {
    server.close();
  }
});
