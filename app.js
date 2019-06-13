'use strict';
const hub = require('./events/hub');
require('./events/error');
require('./events/logger');
require('./events/network-logger');

const fs = require('fs');

const alterFile = (file) => {
  fs.readFile( file, (err, data) => {
    if(err) { 
      hub.emit('error', err);
    }
    let text = data.toString().toUpperCase();
    fs.writeFile( file, Buffer.from(text), (err, data) => {
      if(err) { 
        hub.emit('error', err);
        hub.emit('success', file);
        hub.emit('save', file);
      }
    });
  });
};

let file = process.argv.slice(2).shift();
alterFile(file);