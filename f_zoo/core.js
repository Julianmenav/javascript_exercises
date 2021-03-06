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
  let locs = animals.map((animal) => animal.location).filter((value, i, arr) => arr.indexOf(value) === i)
 
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
  let animals = data.animals
  let ratings = animals.map((animal) => animal.popularity).filter((value, i, arr) => arr.indexOf(value) === i).sort((a,b) => a-b)
  if (rating) return animals.filter((animal) => animal.popularity === rating).map((el) => el.name)
  return ratings.reduce((agg, rating) => ({...agg, [rating]:animals.filter((el) => el.popularity === rating).map((el) => el.name)}), {})
}

function animalsByIds(ids) {
  let animals = data.animals
  if (Array.isArray(ids)) return animals.filter((animal) => [...ids].some((id) => id === animal.id))
  return animals.filter((animal) => animal.id === ids)
}

function animalByName(animalName) {
  if (!animalName) return {}
  let animals = data.animals
  let animalSpecies = animals.filter((animal) => animal.residents.some((animal) => animal.name === animalName))[0]
  let animal = animalSpecies.residents.find((res) => res.name === animalName)
  animal.species = animalSpecies.name
  return animal
}

function employeesByIds(ids) {
  let employees = data.employees
  if (Array.isArray(ids)) return employees.filter(employ => [...ids].some(id => id === employ.id))
  return employees.filter(employ => employ.id === ids)
}

function employeeByName(employeeName) {
  if(!employeeName) return {}
  let employees = data.employees
  return employees.find(employ => employeeName === employ.firstName || employeeName === employ.lastName)
}

function managersForEmployee(idOrName) {
  let employees = data.employees
  let employ =  {...employees.find(employ => employ.id === idOrName || employ.firstName === idOrName || employ.lastName === idOrName)}
  employ.managers = employ.managers.map(id => `${employeesByIds(id)[0].firstName} ${employeesByIds(id)[0].lastName}`)
  return employ
}

function employeeCoverage(idOrName) {
  let animals = data.animals
  let employees = data.employees
  if (!idOrName) return employees.reduce((agg,el) => ({
    ...agg ,
    [`${el.firstName} ${el.lastName}`]: el.responsibleFor.map(id => animals.find(animal => animal.id === id).name)
  }), {})
  let employ = {...employees.find(employ => employ.firstName === idOrName || employ.lastName === idOrName || employ.id ===idOrName)}
  return {[`${employ.firstName} ${employ.lastName}`]: employ.responsibleFor.map(id => animals.find(animal => animal.id === id).name)}
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
