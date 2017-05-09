import React, { Component } from 'react';
import PropTypes from 'prop-types'


const fetchHomeworld = (world) => {
  console.log('2', world)
  fetch(`${world}`)
    .then((response)=>{return response.json()})
    .then((data) => console.log(data.name))
}

const displayHomeworld = (data) => {
  return(
    <div><p>{data.name}</p></div>
  )
}

const Homeworld = ({ world }) => {
  console.log(world)
  return(
    <div>
      {fetchHomeworld(world)}
    </div>
  )
}


export default Homeworld;
