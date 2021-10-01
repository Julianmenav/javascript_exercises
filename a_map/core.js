//Para comprobar los test: npm run test:map
function multiplyBy10(array) {
  return array.map((element) => element*10)
}
//[1,2,3] => [3,1,2]
function shiftRight(array) {
  return array.map( (element, i, arr) => {
    return arr[(i + 2) % arr.length]
  }) 
}

function onlyVowels(array) {
  return array.map((element) => element.match(/[aeiou]/g).join(""))
}

function doubleMatrix(array) {
  return array.map((arr) => arr.map((element) => element*2))
}


module.exports = {
  multiplyBy10,
  shiftRight,
  onlyVowels,
  doubleMatrix
};
