import React from 'react';
import PropTypes from 'prop-types'
import './button.css';

const Button= ({ handleClick, people, planets, vehicles, category, favorites }) => {
  return (
    <div className='buttons'>
      <button className='ppl-btn' onClick={() => handleClick('people')}>people</button>

      <button onClick={() => handleClick('planets')}>planets</button>

      <button onClick={() => handleClick('vehicles')}>vehicles</button>

      <button onClick={() => handleClick('favorite')}>View favorites {favorites.length}</button>

    </div>
  )
}

export default Button;


Button.propTypes = {
  handleClick: PropTypes.func,
  people: PropTypes.string,
  planets: PropTypes.string,
  vehicles: PropTypes.string,
  category: PropTypes.string,
  favorites: PropTypes.array
}
