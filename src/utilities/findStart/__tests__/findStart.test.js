const findStart = require('../findStart');

describe('find start of the map', () => {
  it('should find the start', () => {
    const map = `     
   +-B-x
   |
 A-+
 @`
      .split('\n')
      .slice(1)
      .map((s) => s.split(''));
    const startPosition = findStart(map);
    expect(startPosition).toStrictEqual([3, 1]);
  });

  it('should throw error for missing start', () => {
    const map = `     
   +-B-x
   |
 A-+
 `;
    const startWithError = () =>
      findStart(
        map
          .split('\n')
          .slice(1)
          .map((s) => s.split(''))
      );
    expect(startWithError).toThrow(new Error('Missing start not allowed'));
  });

  it('should throw error for multiple start', () => {
    const map = `     
   +-B-x-@
   |
 A-+
 @`;
    const startWithError = () =>
      findStart(
        map
          .split('\n')
          .slice(1)
          .map((s) => s.split(''))
      );
    expect(startWithError).toThrow(new Error('Multiple starts not allowed'));
  });
});
