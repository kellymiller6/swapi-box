import React from 'react';
// import Card from '../card/Card';
import PeopleCard from '../card/PeopleCard';
import PlanetCard from '../card/PlanetCard';
import VehicleCard from '../card/VehicleCard';
// import PropTypes from 'prop-types'



const renderPeople = (categoryData, handleFavorite) => {
 return  Object.keys(categoryData).map((person, index)=> {
   return <PeopleCard
    key={index}
    name={categoryData[person].name}
    species={categoryData[person].species} 
    homeworld={categoryData[person].homeworld}
    population={categoryData[person].population}
    handleFavorite={handleFavorite}/>
 })
}

const renderPlanets = (categoryData, handleFavorite) => {
 return Object.keys(categoryData).map((planet, index)=>{
   return <PlanetCard key={index}
   name={categoryData[planet].name}
   population={categoryData[planet].population}
   residents={categoryData[planet].residents}
   terrain={categoryData[planet].terrain}
   climate={categoryData[planet].climate}
   handleFavorite={handleFavorite}/>
 })
}

const renderVehicles = (categoryData, handleFavorite) => {
 return Object.keys(categoryData).map((vehicle, index)=>{
   return <VehicleCard key={index} model={categoryData[vehicle].model} car_class={categoryData[vehicle].class} passengers={categoryData[vehicle].passengers}
   handleFavorite={handleFavorite}/>
 })
}

const renderCards = (category, categoryData )=>{
  switch(category){
    case 'people':
      return renderPeople(categoryData);
      break;
    case'planets':
      return renderPlanets(categoryData);
      break;
    case 'vehicles':
      return renderVehicles(categoryData);
  }
}

const Container = ({ category, categoryData }) => {
 return (
   <div className='container'>
     {renderCards(category, categoryData)}
   </div>
 )
}


export default Container;


// Container.Proptypes = {
//
// }
