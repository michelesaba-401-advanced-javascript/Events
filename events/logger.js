const hub = require('./hub');

hub.on('success', (file) => {
  console.log('Success!!', file);
});