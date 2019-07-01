'use strict';
const client = require('socket.io-client');

const socket = client.connect('http://localhost:3000');

socket.on('data', data => {
  console.log('LOG', data.toString());
});

socket.on('close', () => {
  console.log('Connection closed!');
});
