const isValidCharacter = require('../isValidCharacter');

describe('checks for valid characters', () => {
  it('should give undefined for valid capital letter', () => {
    const valid = isValidCharacter('A');
    expect(valid).toBeUndefined();
  });
  it('should give undefined for vertical move sign  |', () => {
    const valid = isValidCharacter('|');
    expect(valid).toBeUndefined();
  });
  it('should give undefined for valid horizontal move sign -', () => {
    const valid = isValidCharacter('-');
    expect(valid).toBeUndefined();
  });
  it('should give undefined for valid turn sign +', () => {
    const valid = isValidCharacter('+');
    expect(valid).toBeUndefined();
  });
  it('should give undefined for valid start sign @', () => {
    const valid = isValidCharacter('@');
    expect(valid).toBeUndefined();
  });
  it('should give undefined for valid end sign x', () => {
    const valid = isValidCharacter('x');
    expect(valid).toBeUndefined();
  });

  it('should throw error for any small letter except x', () => {
    const valid = () => isValidCharacter('a');
    expect(valid).toThrow('Only "A-Z-|@x" and spaces are valid characters');
  });
  it('should throw error for any non capital non alphanumeric except -|@', () => {
    const valid = () => isValidCharacter('_');
    expect(valid).toThrow('Only "A-Z-|@x" and spaces are valid characters');
  });
});
