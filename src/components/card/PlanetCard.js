import React from 'react';
// import PropTypes from 'prop-types';

const PlanetCard = ({name, population, residents, terrain, climate }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{population}</p>
      <p>{terrain}</p>
      <p>{climate}</p>
      {residents.map(resident => <p>{resident}</p>)}
    </div>
  )
}

export default PlanetCard;
