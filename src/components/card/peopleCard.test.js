import React from 'react';
import {shallow, mount} from 'enzyme';
import PeopleCard from './PeopleCard';

describe('PeopleCard Tests', () => {
  let wrapper;
    beforeEach(() => {
      wrapper = shallow(<PeopleCard name={'Luke'} species={'human'} home={'earth'} population={100}/>)
    })

    test('PeopleCard generates two cards', () => {
      expect(wrapper.find('.people-card').length).toEqual(1);
    })

    test('PeopleCard renders favorite button', () => {
      expect(wrapper.find('button').length).toEqual(1);
    })
})
