import React from 'react';
// import Card from '../card/Card';
import PeopleCard from '../card/PeopleCard';
import PlanetCard from '../card/PlanetCard';
import VehicleCard from '../card/VehicleCard';
// import PropTypes from 'prop-types'



const renderPeople = (categoryData, handleFavorite, favorites) => {
 return  Object.keys(categoryData).map((person, index)=> {
   return <PeopleCard
    key={index}
    name={categoryData[person].name}
    species={categoryData[person].species}
    homeworld={categoryData[person].homeworld}
    population={categoryData[person].population}
    handleFavorite={handleFavorite}
    favorites={favorites}
    personObject={categoryData[person]}/>
 })
}

const renderPlanets = (categoryData, handleFavorite, favorites) => {
 return Object.keys(categoryData).map((planet, index)=>{
   return <PlanetCard key={index}
     name={categoryData[planet].name}
     population={categoryData[planet].population}
     residents={categoryData[planet].residents}
     terrain={categoryData[planet].terrain}
     climate={categoryData[planet].climate}
     handleFavorite={handleFavorite}
     favorites={favorites}
     planetObject={categoryData[planet]}/>
 })
}

const renderVehicles = (categoryData, handleFavorite, favorites) => {
 return Object.keys(categoryData).map((vehicle, index)=>{
   return <VehicleCard
    key={index}
    model={categoryData[vehicle].model}
    car_class={categoryData[vehicle].class}
    passengers={categoryData[vehicle].passengers}
    handleFavorite={handleFavorite}
    favorites={favorites}
    vehicleObject={categoryData[vehicle]}/>
 })
}

const renderFavorites = (favorites, categoryData, handleFavorite) => {
  favorites.forEach(object => {
    if(object.type === 'people'){
      renderPeople(categoryData, handleFavorite, favorites)
    } else if(object.type === 'planets'){
      return renderPlanets(categoryData, handleFavorite, favorites);
    } else if (object.type === 'vehicles'){
      return renderVehicles(categoryData, handleFavorite, favorites);
    }
  })
}

const renderCards = (category, categoryData, handleFavorite, favorites )=>{
  switch(category){
    case 'people':
      return renderPeople(categoryData, handleFavorite, favorites);
      break;
    case'planets':
      return renderPlanets(categoryData, handleFavorite, favorites);
      break;
    case 'vehicles':
      return renderVehicles(categoryData, handleFavorite, favorites);
      break;
    case 'favorites':
    return renderFavorites(categoryData, handleFavorite, favorites)
  }
}

const Container = ({ category, categoryData, handleFavorite, favorites }) => {
 return (
   <div className='container'>
     {renderCards(category, categoryData, handleFavorite, favorites)}
   </div>
 )
}


export default Container;


// Container.Proptypes = {
//
// }
