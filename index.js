function isBalanced(str) {
  const stringSplitted = str.split('');
  var temp = [];

  stringSplitted.forEach((currentCharacter) => {
    if (isOpenCharacter(currentCharacter)) {
      temp = [...temp, currentCharacter];
    }

    if (
      isCloseCharacter(currentCharacter) &&
      isInOrder(temp.last(), currentCharacter)
    ) {
      temp = deleteLastItem(temp);
    }
  });
  return temp.isEmpty();
}

Array.prototype.last = function () {
  return this[this.length - 1];
};

Array.prototype.isEmpty = function () {
  return this.length === 0;
};

function isOpenCharacter(character) {
  const validCharacters = ['(', '{', '['];
  return isValidCharacter(character, validCharacters);
}

function isCloseCharacter(character) {
  const validCharacters = [')', '}', ']'];
  return isValidCharacter(character, validCharacters);
}

function isValidCharacter(character, validCharacters) {
  const charactersFiltered = validCharacters.filter(
    (value) => character === value
  );
  return !charactersFiltered.isEmpty();
}

function isInOrder(firstCharacter, secondCharacter) {
  return (
    (firstCharacter === '(' && secondCharacter === ')') ||
    (firstCharacter === '{' && secondCharacter === '}') ||
    (firstCharacter === '[' && secondCharacter === ']')
  );
}

function deleteLastItem(array) {
  return array.slice(0, -1);
}

module.exports = {
  isBalanced,
};
