function onlyEven(array) {
  return array.filter((element) => element % 2 == 0)
}

function onlyOneWord(array) {
  return array.filter((element) => !/\s/.test(element))
}

function positiveRowsOnly(array) {
  return array.filter((arr) => arr.every((integer) => integer > 0))
}

function allSameVowels(array) {
  return array.filter((word) => word.match(/[aeiou]/g).every((letter) => letter === word.match(/[aeiou]/g)[0]))
}


module.exports = {
  onlyEven,
  onlyOneWord,
  positiveRowsOnly,
  allSameVowels
};
