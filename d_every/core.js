// Check to see if all elements in an array
// are even numbers.

function allEven(input) {
  return input.every((element) => element % 2 === 0);
}

// Check to see if all elements in an array
// are of the same type.

function allSameType(input) {
  return input.every((element, i, arr) => typeof(element) === typeof(arr[0]));
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.

function positiveMatrix(input) {
  return input.every((arr) => Array.isArray(arr) && arr.every((subelement) => subelement > 0))
}

// Check that all items in an array are strings
// and that they all only contain the same vowels.

function allSameVowels(input) {
  return input.every((string) => typeof(string) === "string" && string.match(/[aeiou]/g).every((vowel) => vowel === string.match(/[aeiou]/g)[0]))
}

module.exports = {
  allEven,
  allSameType,
  positiveMatrix,
  allSameVowels
};
