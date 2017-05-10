import React, { Component } from 'react';
import PropTypes from 'prop-types';

const VehicleCard = ({model, car_class, passengers}) => {
 return(
   <div className='card'>
 <h3>{model}</h3>
 <p>{car_class}</p>
 <p>{passengers}</p>
 <button className='favorite'
         onClick={(name) => this.props.handleFavorite(this.props.name)}>
         Favorite
         </button>
 </div>
)
}

export default VehicleCard;
