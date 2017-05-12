import React from 'react';
import './card.css';
import PropTypes from 'prop-types';
import favoriteClass from '../../helpers/favoriteClass'

const PeopleCard = ({id, personObject, name, homeworld, species, population, handleFavorite, favorites}) => {


let favClass = favoriteClass(name, favorites);
console.log(favClass);
  return (
    <div  className={`card people-card ${favClass}`}>
      <h3>{name}</h3>
      <p>Species: {species}</p>
      <p>Homeworld: {homeworld}</p>
      <p>Population: {population}</p>
      <button id={`${id}`}className='favorite'
        onClick={(e) => handleFavorite(personObject)}>
        Favorite
      </button>
    </div>
  )
}

export default PeopleCard;

PeopleCard.propTypes = {
  personObject: PropTypes.object,
  name: PropTypes.string,
  homeworld: PropTypes.string,
  species: PropTypes.string,
  population: PropTypes.string,
  handleFavorite: PropTypes.func,
  favoriteClass: PropTypes.func,
  favorites: PropTypes.array
}
