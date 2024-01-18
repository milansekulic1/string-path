const {findStart, findEnd, isValidCharacter} = require('./utilities');
const isForkInPath = require('./utilities/isForkInPath/isForkedPath');
const isValidInput = require('./utilities/isValidInput/isValidInput');

function traverseMap(map) {
  isValidInput(map);
  const visited = {};
  let letters = '';
  let path = '';

  function traverseDirection(row, col, directionRow, directionCol) {
    while (map[row] && map[row][col]) {
      const current = map[row][col];
      if (current) isValidCharacter(current);
      if (!current || current.trim() === '') return;
      path += current;

      if (current === 'x') {
        visited[`${row}-${col}`] = true;
        return;
      }

      if (/[A-Z]/.test(current) && !visited[`${row}-${col}`]) {
        letters += current;
        visited[`${row}-${col}`] = true;

        if (directionCol !== 0 && !map[row][col + directionCol]?.trim().length) {
          traverseDirection(row + 1, col, 1, 0);
          traverseDirection(row - 1, col, -1, 0);
          return;
        }

        if (directionRow !== 0 && !map[row + directionRow]?.[col]?.trim().length) {
          traverseDirection(row, col + 1, 0, 1);
          traverseDirection(row, col - 1, 0, -1);
          return;
        }
      }

      if (current === '+') {

        if (directionRow !== 0 && !map[row][col + 1] && !map[row][col - 1]) {
          throw Error('False turn not allowed');
        }
        if (directionCol !== 0 && !map[row + 1]?.[col] && !map[row - 1]?.[col]) {
          throw Error('False turn not allowed');
        }

        if (directionCol !== 0) {
          isForkInPath(map, startRow, startCol,'|');
          traverseDirection(row + 1, col, 1, 0);
          traverseDirection(row - 1, col, -1, 0);
          return;
        }

        if (directionRow !== 0) {
          isForkInPath(map, startRow, startCol,'-');
          traverseDirection(row, col + 1, 0, 1);
          traverseDirection(row, col - 1, 0, -1);
          return;
        }
      }

      row += directionRow;
      col += directionCol;
    }
  }

  const [startRow, startCol] = findStart(map);
  const [endRow, endCol] = findEnd(map);
  isForkInPath(map, startRow, startCol,'-');
  isForkInPath(map, startRow, startCol,'|');
  path += '@';
  traverseDirection(startRow, startCol + 1, 0, 1); // Right lookup
  traverseDirection(startRow, startCol - 1, 0, -1); // Left lookup
  traverseDirection(startRow + 1, startCol, 1, 0); // Bottom lookup
  traverseDirection(startRow - 1, startCol, -1, 0); // Top lookup

  if (!visited[`${endRow}-${endCol}`]) throw Error('Broken path not allowed');
  return {letters, path};
}

module.exports = traverseMap;

