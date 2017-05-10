const peopleCleaner = (data) => {
  const array = data.results;
  const people = array.reduce((acc, person) => {
    if(!acc[person.name]) {
      acc[person.name] = {};
      acc[person.name].name = person.name;
      acc[person.name].url = person.url;
      acc[person.name].homeworldUrl = person.homeworld;
      acc[person.name].speciesUrl = person.species
      acc[person.name].type='people';
    }
    return acc;
  }, {})

  const planets = Object.keys(people).map((person) => {
    fetch(people[person].homeworldUrl)
    .then((response) => response.json())
    .then((planet) => {
      if(people[person].homeworldUrl === planet.url) {
            people[person].homeworld = planet.name
            people[person].population = planet.population
        }
      }
    )
  })

  const species = Object.keys(people).map((person) => {
    fetch(people[person].speciesUrl)
    .then((response) => response.json())
    .then((species) => {
      if(people[person].speciesUrl[0] === species.url) {
            people[person].species = species.name
        }
      }
    )
  })

return people;
}

export default peopleCleaner;
