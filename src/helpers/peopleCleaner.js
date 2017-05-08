import data from '../stub/people.json';

const peopleCleaner = (data) => {
  const array = data.results;
  // console.log(array);
  const people =  array.reduce((acc, person) => {
    if(!acc[person.name]) {
      acc[person.name] = {homeworld: person.homeworld, species: person.species}
    }
    return acc;
  }, {})
  return people;
}

export default peopleCleaner;
