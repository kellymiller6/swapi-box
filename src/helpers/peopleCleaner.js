const peopleCleaner = (data) => {
  const array = data.results;
  const people = array.reduce((acc, person) => {
    if(!acc[person.name]) {
      acc[person.name] = {};
      acc[person.name].name = person.name;
      acc[person.name].url = person.url;
      acc[person.name].homeworldUrl = person.homeworld;
    }
    return acc;
  }, {})

  const planets = Object.keys(people).map((person) => {
    fetch(people[person].homeworldUrl)
    .then((response) => response.json())
    .then((planet) => {
      if(people[person].homeworldUrl === planet.url) {
            people[person].homeworld = planet.name
        }
      }
    )
  })
  // console.log(planets);


  // console.log(planets);
//   const world = [fetch(person.homeworld)
//     .then((response) => response.json())
//     .then((planet) => {
//       if(person.homeworld === planet.url) {
//         acc[person.name].homeworld = planet.name;
//       }
//     })
//     .catch(console.log('world error'))]
//
//     Promise.all(world)
//     .then((worldArray) => console.log(worldArray[0].url))
//     .then((worldArray) => person.homeworld === worldArray[0].url ? acc[person.name].homeworld = worldArray[0].name : 'undefined')
//     .catch(console.log('promise.all error'));
// // console.log(people);
return people;
}

export default peopleCleaner;
