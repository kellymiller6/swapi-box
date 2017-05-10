import React from 'react';
// import PropTypes from 'prop-types';

const PlanetCard = ({name, population, residents, terrain, climate }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{population}</p>
    </div>
  )
}

export default PlanetCard;
