import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './button.css';

const Button= ({ handleFetch }) => {
  return (
    <div>
      <button onClick={() => handleFetch('people')}>people</button>

      <button onClick={() => handleFetch('planets')}>planets</button>

      <button onClick={() => handleFetch('vehicles')}>vehicles</button>

    </div>
  )
}

export default Button;


Button.Proptypes = {

}
