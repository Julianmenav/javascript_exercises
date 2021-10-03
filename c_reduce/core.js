function sum(array) {
  return array.reduce((sum, element) => sum + element)
}

function productAll(array) {
  return array.flat().reduce((agg, el) => agg * el , 1)
}

function objectify(array) {
  return array.reduce((agg, subArr) => ({ ...agg, [subArr[0]]:subArr[1] }), {})
}

function luckyNumbers(array) {
  return array.reduce((agg, el, i, arr) => {
    if (i+1 === arr.length)
      return agg + ` and ${el}`
    return agg + ` ${el},`
  },"Your lucky numbers are:")
}

module.exports = {
  sum,
  productAll,
  objectify,
  luckyNumbers
};