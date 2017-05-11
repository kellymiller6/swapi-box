import React from 'react';
import {shallow, mount} from 'enzyme';
import Button from '../button/Button';

describe('Button Tests', ()=>{
  let wrapper;
  beforeEach(()=> {
    wrapper = shallow(<Button handleClick={() => {}}
      people={{}}
      planets={{}}
      vehicles={{}}
      category={'category'}
      favorites={['a', 'b']}
      />)

  })

  test('Button has className buttons', () => {
    expect(wrapper.find('.buttons').length).toEqual(1)
  })

  test('Button generartes four buttons', () => {
    expect(wrapper.find('button').length).toEqual(4)
  })


})
