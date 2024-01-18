const isForkInPath = require('../isForkedPath');

describe('checks for fork in the map', () => {
  it('should thorw error in horizontal fork', () => {
    const map = `
    x-C-@-A-B`
      .split('\n')
      .slice(1)
      .map((s) => s.split(''));
    const isFork = () => isForkInPath(map, 0, 8,'-');
    expect(isFork).toThrow('Fork in the path not allowed');
  });

  it('should throw error for vertical fork', () => {
    const map = `     
    x
    |
    C
    |
    @
    |
    G
 `
      .split('\n')
      .slice(1)
      .map((s) => s.split(''));

    const isFork = () => isForkInPath(map, 4, 4,'|');
    expect(isFork).toThrow('Fork in the path not allowed');
  });

  it('should return undefined if the fork is not found', () => {
    const map = `     
   +-B-x
   |
 A-+
 @`
      .split('\n')
      .slice(1)
      .map((s) => s.split(''));

    expect(isForkInPath(map, 3, 1)).toBeUndefined();
  });
});
