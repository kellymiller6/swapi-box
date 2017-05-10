import React from 'react';
// import PropTypes from 'prop-types';

const PeopleCard = ({personObject, name, homeworld, species, population, handleFavorite}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <button className='favorite'
              onClick={(e) => handleFavorite(personObject)}>
              Favorite
              </button>
    </div>
  )
}

export default PeopleCard;
