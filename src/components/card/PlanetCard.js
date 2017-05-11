import React from 'react';
import './card.css';

// import PropTypes from 'prop-types';

const PlanetCard = ({planetObject, name, population, residents, terrain, climate, handleFavorite }) => {
  return (
    <div className='card'>
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
      <p>Climate: {climate}</p>
      {residents.map(resident => <p>Resident: {resident}</p>)}
      <button className='favorite'
        onClick={(e) => handleFavorite(planetObject)}>
        Favorite
      </button>
    </div>
  )
}

export default PlanetCard;
