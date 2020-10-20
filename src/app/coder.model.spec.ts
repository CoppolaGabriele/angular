import { Coder } from './coder.model';

describe('Coder', () => {
  it('should create an instance', () => {
    expect(new Coder('Pino', 'Festino', 2999)).toBeTruthy();
  });
});
