import planetCleaner from './planetCleaner'
const peopleCleaner = (data) => {
  const array = data.results;
  const people =  array.reduce((acc, person, array) => {
    if(!acc[person.name]) {
      acc[person.name] = {}
      acc[person.name].name = person.name
      acc[person.name].species = person.species
      fetch(`${person.homeworld}`)
     .then((response) => response.json())
     .then((obj) => {
       acc[person.name].homeworld = obj.name
       debugger;
     });
    }



      // planetCleaner(obj))
      // .then(planets => acc[person.name].homeworld = planets[person.homeworld])
      //
      // console.log(acc);
    return acc;
  }, {})
  return people;
}

export default peopleCleaner;
