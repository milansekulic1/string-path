const isValidInput = require('../isValidInput');

describe('checks for valid characters', () => {
  it('should throw error for non array input', () => {
    const valid = () => isValidInput('A');
    expect(valid).toThrow('Input needs to be an array');
  });
  it('should throw error for non nested array input', () => {
    const valid = () => isValidInput([1]);
    expect(valid).toThrow('Input needs to be nested array');
  });

  it('should throw error for non string element in nested array input', () => {
    const valid = () => isValidInput([[1]]);
    expect(valid).toThrow('Elements of nested array have to be string');
  });

  it('should return undefined for correct input', () => {
    const valid = isValidInput([['A']]);
    expect(valid).toBeUndefined();
  });
});
