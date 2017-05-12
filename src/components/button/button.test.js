import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../button/Button';

describe('Button Tests', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button handleClick={() => {}}
      people={{}}
      planets={{}}
      vehicles={{}}
      category={'category'}
      favorites={['a', 'b']}
      />);
  });

  test('Button has className buttons', () => {
    expect(wrapper.find('.buttons').length).toEqual(1);
  });

  test('Button generartes four buttons', () => {
    expect(wrapper.find('button').length).toEqual(4);
  });
});
describe('Button Tests', () => {
  const mockFn = jest.fn();
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button handleClick={mockFn}
      people={{}}
      planets={{}}
      vehicles={{}}
      category={'category'}
      favorites={['a', 'b']}
      />);
  });

  test('on click button will call a function', () => {
    wrapper.find('.ppl-btn').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
