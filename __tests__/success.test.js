'use strict';

require('../events/logger');
const hub = require('../events/hub');

describe('console spy', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('error handler was called', () => {
    it('calls success emmitter and logs it with file', () => {
      let file;
      hub.emit('success', file);
      expect(console.log).toHaveBeenCalledWith('Success!!', file);
    });
  });
});
