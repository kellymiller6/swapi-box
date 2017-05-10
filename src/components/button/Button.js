import React from 'react';
// import PropTypes from 'prop-types'
import './button.css';

const Button= ({ handleClick, people, planets, vehicles, category }) => {
  return (
    <div>
      <button onClick={() => handleClick(people, 'people')}>people</button>

      <button onClick={() => handleClick(planets, 'planets')}>planets</button>

      <button onClick={() => handleClick(vehicles, 'vehicles')}>vehicles</button>

    </div>
  )
}

export default Button;


// Button.Proptypes = {
//
// }
