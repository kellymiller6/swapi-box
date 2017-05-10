import React from 'react';
// import Card from '../card/Card';
import PeopleCard from '../card/PeopleCard';
import PlanetCard from '../card/PlanetCard';
import VehicleCard from '../card/VehicleCard';
// import PropTypes from 'prop-types'



const renderPeople = (people, handleFavorite, favorites) => {
  // console.log(people);
 return  Object.keys(people).map((person, index)=> {
   return <PeopleCard
     key={index}
     name={people[person].name}
     species={people[person].species}
     homeworld={people[person].homeworld}
     population={people[person].population}
     handleFavorite={handleFavorite}
     favorites={favorites}
     personObject={people[person]}/>
 })
}

const renderPlanets = (planets, handleFavorite, favorites) => {
 return Object.keys(planets).map((planet, index)=>{
   return <PlanetCard key={index}
     name={planets[planet].name}
     population={planets[planet].population}
     residents={planets[planet].residents}
     terrain={planets[planet].terrain}
     climate={planets[planet].climate}
     handleFavorite={handleFavorite}
     favorites={favorites}
     planetObject={planets[planet]}/>
 })
}

const renderVehicles = (vehicles, handleFavorite, favorites) => {
 return Object.keys(vehicles).map((vehicle, index)=>{
   return <VehicleCard
     key={index}
     model={vehicles[vehicle].model}
     car_class={vehicles[vehicle].class}
     passengers={vehicles[vehicle].passengers}
     handleFavorite={handleFavorite}
     favorites={favorites}
     vehicleObject={vehicles[vehicle]}/>
 })
}

const renderFavorites = (category, people, planets, vehicles, handleFavorite, favorites) => {
  favorites.map(object => {
    console.log(object);
    if(object.type === 'people'){
      return <PeopleCard
        // key={index}
        name={object.name}
        species={object.species}
        homeworld={object.homeworld}
        population={object.population}
        handleFavorite={handleFavorite}
        favorites={favorites}
        personObject={object}/>
    } else if(object.type === 'planets'){
      return renderPlanets(planets, handleFavorite, favorites);
    } else if (object.type === 'vehicles'){
      return renderVehicles(vehicles, handleFavorite, favorites);
    }
  })
}

const renderCards = (category, people, planets, vehicles, handleFavorite, favorites )=>{
  switch(category){
    case 'people':
      return renderPeople(people, handleFavorite, favorites);
      break;
    case'planets':
      return renderPlanets(planets, handleFavorite, favorites);
      break;
    case 'vehicles':
      return renderVehicles(vehicles, handleFavorite, favorites);
      break;
    case 'favorite':
    return renderFavorites(category, people, planets, vehicles, handleFavorite, favorites)
  }
}

const Container = ({ category, people, planets, vehicles, handleFavorite, favorites }) => {
 return (
   <div className='container'>
     {renderCards(category, people, planets, vehicles, handleFavorite, favorites)}
   </div>
 )
}


export default Container;


// Container.Proptypes = {
//
// }
