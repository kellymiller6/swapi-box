import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Homeworld from '../Homeworld/Homeworld';

const PeopleCard = ({key, data}) => {
  console.log(data)
  return (
    <div>
      <h3>{data.name}</h3>
      <Homeworld world={data.homeworld}/>
      <p>{data.species}</p>
    </div>
  )
}

export default PeopleCard;
