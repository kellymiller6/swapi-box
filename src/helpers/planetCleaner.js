const planetCleaner = (data) => {
  const array = data.results;
  const planets =  array.reduce((acc, planet) => {
    if(!acc[planet.name]) {
      acc[planet.name] = {terrain: planet.terrain, population: planet.population, climate: planet.climate, residents: planet.residents, name: planet.name}
    }
    return acc;
  }, {})
  return planets;
}

export default planetCleaner;
