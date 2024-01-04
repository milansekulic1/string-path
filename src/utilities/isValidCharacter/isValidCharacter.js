function isValidCharacter(character) {
  if (!/[A-Z-|@x\+\s]/.test(character)) throw Error('Only "A-Z-|@x" and spaces are valid characters');
}

module.exports = isValidCharacter;
