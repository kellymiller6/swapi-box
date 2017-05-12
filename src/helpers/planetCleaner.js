const planetCleaner = (data) => {
  const array = data.results;
  const planets =  array.reduce((acc, planet) => {
    if(!acc[planet.name]) {
      acc[planet.name] = {}
      acc[planet.name].terrain = planet.terrain
      acc[planet.name].population = planet.population
      acc[planet.name].climate = planet.climate
      acc[planet.name].residentUrl = planet.residents
      acc[planet.name].name = planet.name
      acc[planet.name].type='planet'
    }
    return acc;
  }, {})

  Object.keys(planets).map((planet) => {
    planets[planet].residents = []
    planets[planet].residentUrl.forEach(resident => {
      fetch(resident)
      .then((response) => response.json())
      .then((people) => {
        if(resident === people.url) {
          planets[planet].residents.push(people.name)
        }
      })
      .catch(() => {console.log('planet cleaner resident error');})
    })
  })
  return planets;
}

export default planetCleaner;
