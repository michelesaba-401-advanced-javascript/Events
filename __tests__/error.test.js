'use strict';

require('../events/error');
require('../events/error');
const hub = require('../events/hub');
jest.mock('fs');

describe('console spy', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });


  describe('error handler was called', () => {
    it('should check whether console.log was called', () => {
      let err = new Error();
      hub.emit('error', err);
      expect(console.log).toHaveBeenCalledWith('=> => Something went wrong', err);
    });
  });
});
