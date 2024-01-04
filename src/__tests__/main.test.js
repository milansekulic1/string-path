const traverseMap = require('../main');
const {matrix1, matrix2, matrix3, matrix4, matrix5, matrix6, matrix7, matrix8, matrix9, matrix10, matrix13} = require('../test-cases');

describe('traverse map validation', () => {
  it('should find letters and path test case1', () => {
    const result = traverseMap(matrix1);

    expect(result).toStrictEqual({letters: 'AB', path: '@--A-+|B-x'});
  });
  it('should find letters and path test case2', () => {
    const result = traverseMap(matrix2);

    expect(result).toStrictEqual({letters: 'ACB', path: '@---A---+|C|+---+|+-B-x'});
  });
  it('should find letters through intercestions', () => {
    const result = traverseMap(matrix3);

    expect(result).toStrictEqual({letters: 'ABCD', path: '@|A+---B--+|+--C-+|-||+---D--+|x'});
  });
  it('should find letters on turns', () => {
    const result = traverseMap(matrix4);

    expect(result).toStrictEqual({letters: 'ACB', path: '@---A---+|||C---+|+-B-x'});
  });

  it('should not collect a letter from the same location twice', () => {
    const result = traverseMap(matrix5);

    expect(result).toStrictEqual({letters: 'GOONIES', path: '@-G-O-+|+-+|O||+-O-N-+|I|+-+|+-I-+|ES|x'});
  });

  it('should keep direction, even in a compact space', () => {
    const result = traverseMap(matrix6);

    expect(result).toStrictEqual({letters: 'BLAH', path: '@B+++B|+-L-+A+++A-+Hx'});
  });

  it('should ignore stuff after end of path', () => {
    const result = traverseMap(matrix7);

    expect(result).toStrictEqual({letters: 'AB', path: '@-A--+|+-B--x'});
  });
  it('should throw error for missing start', () => {
    const result = () => traverseMap(matrix8);

    expect(result).toThrow('Missing start not allowed');
  });

  it('should throw error for missing end', () => {
    const result = () => traverseMap(matrix9);

    expect(result).toThrow('Missing end not allowed');
  });

  it('should throw error for false turn', () => {
    const result = () => traverseMap(matrix10);

    expect(result).toThrow('False turn not allowed');
  });

  it('should throw error for invalid input', () => {
    const result = () => traverseMap(null);

    expect(result).toThrow('Input needs to be an array');
  });
  it('should throw error for fork in path', () => {
    const result = () => traverseMap(matrix13);

    expect(result).toThrow('Fork in the path not allowed');
  });
});
