import React from 'react';
import './card.css';
// import PropTypes from 'prop-types';



const PeopleCard = ({personObject, name, homeworld, species, population, handleFavorite, favoriteClass, favorites}) => {
let favClass = favoriteClass(name, favorites);
  return (
    <div className={`card people-card ${favClass}`}>
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
