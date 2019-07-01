
'use strict';

const eventHub = require('./hub');

const io = require('socket.io-client');
const socket = io.connect('http://localhost:3000/database');

console.log('Socket connected?', socket);
initializeLogger();

function initializeLogger() {
  eventHub.on('save', log('save'));
  eventHub.on('delete', log('delete'));
  eventHub.on('update', log('update'));

  function log(eventType) {
    return payload => {
      socket.emit(eventType, payload);
    };
  }
}