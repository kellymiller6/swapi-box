import React from 'react';
import { shallow } from 'enzyme';
import ScrollCard from './ScrollCard';

describe('ScrollCard Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ScrollCard quote={[1, 2, 3, 4]}/>);
  });

  test('ScrollCard generates one card', () => {
    expect(wrapper.find('.scroll-card').length).toEqual(1);
  });
});
