const data = require("./data")

function entryCalculator(entrants) {
  let prices = data.prices
  if (!entrants) return 0
  return Object.keys(entrants).reduce((agg, person) => agg + prices[person] * entrants[person] , 0 )
}

function schedule(dayName) {
  let hours = data.hours
  if (dayName === "Monday") return {"Monday":"CLOSED"};
  if (dayName) return {[dayName]: `Open from ${hours[dayName].open}am until ${hours[dayName].close - 12}pm`};
  return Object.keys(hours).reduce((agg, day) => {
    if (day === "Monday") return {...agg, [day]:"CLOSED"}
    return {...agg, [day]:`Open from ${hours[day].open}am until ${hours[day].close - 12}pm`}
  }, {})
}

function animalCount(species) {
  let animals = data.animals
  if (species) return animals.find((animal) => animal.name === species).residents.length
  return animals.reduce((agg, animal) => ({...agg, [animal.name]:animal.residents.length}),{})
}

function animalMap(options) {
  let animals = data.animals
  let locs = ["NE","NW","SE","SW"]
 
  if (options && "includeNames" in options && options.includeNames) {
    return locs.reduce((agg, loc) => ({
      ...agg, 
      [loc]:animals.filter((animal) => animal.location === loc).map((el) => ({
        [el.name]: el.residents.filter((resident) => (!("sex" in options) || resident.sex === options.sex)).map((resident) => resident.name)
      }))
    }), {})
  }
  return locs.reduce((agg, loc) => ({
    ...agg, 
    [loc]:animals.filter((animal) => animal.location === loc).map((el) => el.name)
  }), {})  
}

function animalPopularity(rating) {
  
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
