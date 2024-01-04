function findStart(map) {
  const result = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === '@') {
        result.push([i, j]);
      }
      if (result.length > 1) throw Error('Multiple starts not allowed');
    }
  }
  if (!result.length) throw Error('Missing start not allowed');
  return result[0];
}

module.exports = findStart;
