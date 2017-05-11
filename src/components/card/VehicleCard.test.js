import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard Tests', () => {
  let wrapper;
    beforeEach(() => {
      wrapper = shallow(<VehicleCard model={'Luke'} car_class={'human'} passengers={100}/>)
    })

    test('vehicle card generates two cards', () => {
      expect(wrapper.find('.vehicle-card').length).toEqual(1);
    })

    test('vehicle card renders favorite button', () => {
      expect(wrapper.find('button').length).toEqual(1);
    })
})
