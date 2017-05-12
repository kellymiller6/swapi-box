import React from 'react';
import { shallow } from 'enzyme';
import PeopleCard from './PeopleCard';

describe('PeopleCard Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PeopleCard
        name={'luke'}
        species={'species'}
        homeworld={'homeworld'}
        population={'population'}
        handleFavorite={'fn'}
        favorites={[]}
        personObject={{}}
                        />);
  });

  test('PeopleCard generates two cards', () => {
    expect(wrapper.find('.people-card').length).toEqual(1);
  });

  test('PeopleCard renders favorite button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
