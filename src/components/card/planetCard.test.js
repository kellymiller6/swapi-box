import React from 'react';
import {shallow, mount} from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard Tests', ()=>{
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<PlanetCard
      name={'Alderaan'}
      population={'2000000000'}
      terrain={'grasslands, mountains'}
      climate={'temperate'}
      residents={[]}
      />)

  })

  test('PlanetCard generartes one card', () => {
    expect(wrapper.find('.planet-card').length).toEqual(1)
  })

  test('PlanetCard has favorite button', () => {
    expect(wrapper.find('button').length).toEqual(1)
  })
})
