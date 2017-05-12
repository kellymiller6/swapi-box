import React from 'react';
import { shallow } from 'enzyme';
import VehicleCard from './VehicleCard';

describe('VehicleCard Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<VehicleCard
        name={'name'}
        model={'model'}
        car_class={'carclass'}
        passengers={'passengers'}
        handleFavorite={'handleFavorite'}
        favorites={[]}
        vehicleObject={{}}
                        />);
  });

  test('vehicle card generates two cards', () => {
    expect(wrapper.find('.vehicle-card').length).toEqual(1);
  });

  test('vehicle card renders favorite button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
