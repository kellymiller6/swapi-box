import React, { Component } from 'react';
import Card from '../card/Card';
import PeopleCard from '../card/PeopleCard';
// import PlanetCard from '../card/PlanetCard';
// import VehicleCard from '../card/VehicleCard';
import PropTypes from 'prop-types'

const renderPeople = (categoryData) => {
  // console.log(categoryData)
  return  Object.keys(categoryData).map((person, index)=> {
    console.log(categoryData[person]);
    return <PeopleCard key={index} name={categoryData[person].name} homeworld={categoryData[person].homeworld}/>
  })
}

// const renderPlanets = (categoryData) => {
//   return categoryData.map((planet, index)=>{
//     return <PlanetCard key={index} data={planet}/>
//   })
// }
//
// const renderVehicles = (categoryData) => {
//   return categoryData.map((vehicle, index)=>{
//     return <VehicleCard key={index} data={vehicle}/>
//   })
// }


const renderCards = (category, categoryData )=>{
  switch(category){
    case 'people':
      return renderPeople(categoryData);
    //   break;
    // case'planets':
    //   return renderPlanets(categoryData);
    //   break;
    // case 'vehicles':
    //   return renderVehicles(categoryData);
  }
}

const Container = ({ category, categoryData }) => {
  return (
    <div>
      {renderCards(category, categoryData)}
    </div>
  )
}

export default Container;


Container.Proptypes = {

}
