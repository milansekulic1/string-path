function findEnd(map) {
  const result = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 'x') {
        result.push([i, j]);
      }
      if (result.length > 1) throw Error('Multiple ends not allowed');
    }
  }
  if (!result.length) throw Error('Missing end not allowed');
  return result[0];
}

module.exports = findEnd;
