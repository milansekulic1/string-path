const traverseMap = require('./src/main');
const matrices = require('./src/test-cases');
for (const matrix in matrices) {
  try {
    console.log(traverseMap(matrices[matrix]));
  } catch (error) {
    console.log(error);
  }
}
