import React from 'react';
// import PropTypes from 'prop-types';

const PlanetCard = ({planetObject, name, population, residents, terrain, climate, handleFavorite }) => {
  return (
    <div >
      <h3>{name}</h3>
      <p>{population}</p>
      <p>{terrain}</p>
      <p>{climate}</p>
      {residents.map(resident => <p>{resident}</p>)}
      <button className='favorite'
              onClick={(e) => handleFavorite(planetObject)}>
              Favorite
              </button>
    </div>
  )
}

export default PlanetCard;
