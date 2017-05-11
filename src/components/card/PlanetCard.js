import React from 'react';
import './card.css';

// import PropTypes from 'prop-types';

const PlanetCard = ({planetObject, name, population, residents, terrain, climate, handleFavorite, favoriteClass, favorites }) => {
  let favClass = favoriteClass(name, favorites);
  return (
    <div className={`card planet-card ${favClass}`} >
      <h3>{name}</h3>
      <p>Population: {population}</p>
      <p>Terrain: {terrain}</p>
      <p>Climate: {climate}</p>
      <p>Residents:</p>{residents.map(resident => <span>{resident} </span>)}
      <button className='favorite'
        onClick={(e) => handleFavorite(planetObject)}>
        Favorite
      </button>
    </div>
  )
}

export default PlanetCard;
