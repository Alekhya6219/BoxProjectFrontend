import { jwtauth } from './jwtauth';

describe('Userauth', () => {
  it('should create an instance', () => {
    expect(new jwtauth()).toBeTruthy();
  });
});
