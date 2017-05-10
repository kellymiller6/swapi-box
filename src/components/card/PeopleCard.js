import React from 'react';
// import PropTypes from 'prop-types';

const PeopleCard = ({personObject, key, name, homeworld, species, population, handleFavorite}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{homeworld}</p>
      <p>{population}</p>
      <button className='favorite'
              onClick={(e) => handleFavorite(personObject)}>
              Favorite
              </button>
    </div>
  )
}

export default PeopleCard;
