import React, { Component } from 'react';
import './card.css';

import PropTypes from 'prop-types';

const VehicleCard = ({vehicleObject, model, car_class, passengers, handleFavorite}) => {
 return(
   <div className='card vehicle-card'>
     <h3>{model}</h3>
     <p>{car_class}</p>
     <p>{passengers}</p>
     <button className='favorite'
         onClick={(e) => handleFavorite(vehicleObject)}>
         Favorite
         </button>
 </div>
)
}

export default VehicleCard;
