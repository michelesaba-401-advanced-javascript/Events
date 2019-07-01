'use strict';

const ioFactory = require('socket.io');
const io = ioFactory(3000); // Listen for HTTP

io.on('connection', socket => {
  console.log('Connected', socket.id);

  socket.on('speak', payload => {
    console.log('speaking', payload);

    socket.broadcast.emit('spoken', payload);
  });

  setTimeout(() => {
    socket.broadcast.emit('spoken', 'Welcome ' + socket.id);
  }, 2000);
});

const dbio = io.of('/database');
dbio.on('connection', socket =>
  socket.on('save', payload => {
    console.log('received save');
    socket.emit('save', payload);
  })
);