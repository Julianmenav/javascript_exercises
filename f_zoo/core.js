const data = require("./data")

function entryCalculator(entrants) {
  let prices = data.prices
  if (entrants) return Object.keys(entrants).reduce((agg, person) => agg + prices[person] * entrants[person] , 0 )
  return 0
}

function schedule(dayName) {
  let hours = data.hours
  switch (dayName) {
    case "Monday":
      return {"Monday":"CLOSED"}
    case undefined:
      return Object.keys(hours).reduce((agg, day) => {
        if (day === "Monday") return {...agg, [day]:"CLOSED"}
        return {...agg, [day]:`Open from ${hours[day].open}am until ${hours[day].close - 12}pm`}
      },{})
    default:
      return {[dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`}
  }
}

function animalCount(species) {
  // your code here
}

function animalMap(options) {
  // your code here
}

function animalPopularity(rating) {
  // your code here
}

function animalsByIds(ids) {
  // your code here
}

function animalByName(animalName) {
  // your code here
}

function employeesByIds(ids) {
  // your code here
}

function employeeByName(employeeName) {
  // your code here
}

function managersForEmployee(idOrName) {
  // your code here
}

function employeeCoverage(idOrName) {
  // your code here
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalPopularity,
  animalsByIds,
  animalByName,
  employeesByIds,
  employeeByName,
  managersForEmployee,
  employeeCoverage
};
