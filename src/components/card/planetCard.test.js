import React from 'react';
import { shallow, mount } from 'enzyme';
import PlanetCard from './PlanetCard';

describe('PlanetCard Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PlanetCard
      name={'name'}
      population={'population'}
      residents={[]}
      terrain={'terrain'}
      climate={'climate'}
      handleFavorite={'handleFavorite'}
      favorites={[]}
      planetObject={{}}
                      />);
  });

  test('PlanetCard generartes one card', () => {
    expect(wrapper.find('.planet-card').length).toEqual(1);
  });

  test('PlanetCard has favorite button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
