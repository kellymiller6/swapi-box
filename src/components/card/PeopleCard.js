import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Homeworld from '../Homeworld/Homeworld';

const PeopleCard = ({key, name, homeworld}) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{homeworld}</p>
    </div>
  )
}

export default PeopleCard;
