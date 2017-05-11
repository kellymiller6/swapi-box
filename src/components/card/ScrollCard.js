import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ScrollCard = ({quote}) => {
  const display = quote[Math.floor(Math.random() * quote.length)]
 return(
   <div className='scroll-card'>
    {display}
   </div>
)
}

export default ScrollCard;
