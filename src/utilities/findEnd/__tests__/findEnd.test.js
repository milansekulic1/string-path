const findEnd = require('../findEnd');

describe('find end of the map', () => {
  it('should find the the end', () => {
    const map = `     
   +-B-x
   |
 A-+
 @`
      .split('\n')
      .slice(1)
      .map((s) => s.split(''));
    const startPosition = findEnd(map);
    expect(startPosition).toStrictEqual([0, 7]);
  });

  it('should throw error for missing end', () => {
    const map = `     
   +-B
   |
 A-+
 `;
    const endWithError = () =>
      findEnd(map)
        .split('\n')
        .slice(1)
        .map((s) => s.split(''));
    expect(endWithError).toThrow(new Error('Missing end not allowed'));
  });

  it('should throw error for multiple ends', () => {
    const map = `     
   +-B-x-@
   |
 A-+x
 @`;
    const endWithError = () =>
      findEnd(map)
        .split('\n')
        .slice(1)
        .map((s) => s.split(''));
    expect(endWithError).toThrow(new Error('Multiple ends not allowed'));
  });
});
