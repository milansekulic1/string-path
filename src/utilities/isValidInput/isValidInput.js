const isValidInput = (input) => {
  if (!Array.isArray(input)) throw Error('Input needs to be an array');
  if (input.some((i) => !Array.isArray(i))) throw Error('Input needs to be nested array');
  if (input.some((i) => i.some((s) => typeof s !== 'string'))) throw Error('Elements of nested array have to be string');
};

module.exports = isValidInput;
