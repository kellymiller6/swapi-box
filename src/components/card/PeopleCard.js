import React from 'react';
// import PropTypes from 'prop-types';

const PeopleCard = ({key, name, homeworld, species, population}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{species}</p>
      <p>{homeworld}</p>
      <p>{population}</p>
    </div>
  )
}

export default PeopleCard;
