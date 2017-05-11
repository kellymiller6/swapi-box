import React from 'react';
// import PropTypes from 'prop-types'
import './button.css';

const Button= ({ handleClick, people, planets, vehicles, category, favorites }) => {
  return (
    <div className='buttons'>
      <button onClick={() => handleClick('people')}>people</button>

      <button onClick={() => handleClick('planets')}>planets</button>

      <button onClick={() => handleClick('vehicles')}>vehicles</button>

      <button onClick={() => handleClick('favorite')}>View favorites {favorites.length}</button>

    </div>
  )
}

export default Button;


// Button.Proptypes = {
//
// }
