import React from 'react';
import {shallow, mount} from 'enzyme';
import Container from './Container';

describe('Container Tests', () => {
  let wrapper;
    beforeEach(() => {
      const mockFn = jest.fn();
      wrapper = mount(<Container
        people={{name: 'luke'}}
        planets={{}}
        vehicles={{}}
        category={'people'}
        handleFavorite={mockFn}
        favorites={[]}/>)
    })

    test('Container generates container class', () => {
      expect(wrapper.find('.container').length).toEqual(1);
    })

    test('Container renders 1 people-card class', () => {
      expect(wrapper.find('.people-card').length).toEqual(1);
    })
})
