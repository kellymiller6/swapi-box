import React from 'react';
import PeopleCard from '../card/PeopleCard';
import PlanetCard from '../card/PlanetCard';
import VehicleCard from '../card/VehicleCard';
import './container.css';
import PropTypes from 'prop-types'



const renderPeople = (people, handleFavorite, favorites) => {
 return  Object.keys(people).map((person, index)=> {
   return <PeopleCard
    id={people[person].name}
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

const renderVehicles = (vehicles, handleFavorite,favorites) => {
 return Object.keys(vehicles).map((vehicle, index)=>{
   return <VehicleCard
     key={index}
     name={vehicles[vehicle].name}
     model={vehicles[vehicle].model}
     car_class={vehicles[vehicle].class}
     passengers={vehicles[vehicle].passengers}
     handleFavorite={handleFavorite}
     favorites={favorites}
     vehicleObject={vehicles[vehicle]}/>
 })
}

const renderFavorites = (people, planets, vehicles, favorites, handleFavorite) => {
  return favorites.map(object => {
    if(object.type === 'people'){
      return <PeopleCard
        name={object.name}
        species={object.species}
        homeworld={object.homeworld}
        population={object.population}
        handleFavorite={handleFavorite}
        favorites={favorites}
        personObject={object}/>
    } else if (object.type === 'planet') {
      return <PlanetCard
        name={object.name}
        population={object.population}
        residents={object.residents}
        terrain={object.terrain}
        climate={object.climate}
        handleFavorite={handleFavorite}
        favorites={favorites}
        planetObject={object}/>
    } else if (object.type === 'vehicle') {
      return <VehicleCard
        name={object.name}
        model={object.model}
        car_class={object.class}
        passengers={object.passengers}
        handleFavorite={handleFavorite}
        favorites={favorites}
        vehicleObject={object}/>
    }
    }
  )
}

const renderCards = (category, people, planets, vehicles, handleFavorite, favorites )=>{
  // console.log(category)
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
    case 'fav':
      return renderFavorites(people, planets, vehicles, favorites, handleFavorite);
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


Container.propTypes = {
  category: PropTypes.string,
  people: PropTypes.object,
  planets: PropTypes.object,
  vehicles: PropTypes.object,
  handleFavorite: PropTypes.func,
  favorites: PropTypes.array
}
