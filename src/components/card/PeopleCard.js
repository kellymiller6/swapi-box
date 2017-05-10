import React from 'react';
// import PropTypes from 'prop-types';

const PeopleCard = ({key, name, homeworld}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{homeworld}</p>
    </div>
  )
}

export default PeopleCard;
