import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({vehicleObject, name, model, car_class, passengers, handleFavorite}) => {
 return(
   <div className='card'>
     <h3>{name}</h3>
     <p>Model: {model}</h3>
     <p>Class: {car_class}</p>
     <p>Number of passengers: {passengers}</p>
 <button className='favorite'
         onClick={(e) => handleFavorite(vehicleObject)}>
         Favorite
         </button>
 </div>
)
}

export default VehicleCard;
