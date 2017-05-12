import React from 'react';
import {shallow, mount} from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import films from '../../stub/films.json'
import people from '../../stub/people.json'
import planets from '../../stub/planets.json'
import vehicles from '../../stub/vehicles.json'
import species from '../../stub/species.json'
import filmResult from '../../stub/filmResult'


describe('App Test', () => {
    afterEach(() => {
      expect(fetchMock.calls().unmatched).toEqual([]);
      fetchMock.restore();
    })

    const resolvePromise = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 2000)
      })
    }

    it('should fetch film data', async () => {
      fetchMock.get('http://swapi.co/api/films/', {status: 200, body: films})
      fetchMock.get('*', {status: 200})

      const wrapper = mount(<App/>)
      expect(fetchMock.called()).toEqual(true)
      expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/')
      await resolvePromise()
      expect(wrapper.state('scroll').length).toEqual(7)
    })

    it.skip('should fetch people data', async () => {
      fetchMock.get('http://swapi.co/api/people/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/planets/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/vehicles/', {status: 200, body: vehicles})
      fetchMock.get('http://swapi.co/api/films/', {status: 200, body: films})
      fetchMock.get('http://swapi.co/api/planets/1', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/people/1', {status: 200, body: people})

      const wrapper = mount(<App/>)
      expect(fetchMock.called()).toEqual(true)
      expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/')
      await resolvePromise()
      expect(wrapper.state('people')).toBe('')
    })
})

describe('App Component API Calls', () => {
  const waitingFunc = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      },1000)
    })
  }

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([])
    fetchMock.restore()
  })
  it('should have film quote scroll if film API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/films/' , {
        status: 200,
        body: films
      })

    fetchMock.get('*', {status: 200})

      const wrapper = mount(<App />)

      await waitingFunc()

      expect(wrapper.state('scroll').length).toEqual(7)
  })

  it('should have people in state if people API call returns 200', async () => {
  fetchMock.get('http://swapi.co/api/people/' , {
      status: 200,
      body: people
    })
    fetchMock.get('*', {status: 200})


    const wrapper = mount(<App />)

    await waitingFunc()
    let keys = Object.keys(wrapper.state('people'))
    expect(keys.length).toEqual(2)
})

it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/planets/' , {
        status: 200,
        body: planets
      })
    fetchMock.get('*', {status: 200})


      const wrapper = mount(<App />)

      await waitingFunc()

      let keys = Object.keys(wrapper.state('planets'))
      expect(keys.length).toEqual(2)
  })

  it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/vehicles/' , {
        status: 200,
        body: vehicles
      })
    fetchMock.get('*', {status: 200})


      const wrapper = mount(<App />)

      await waitingFunc()

      let keys = Object.keys(wrapper.state('vehicles'))
      expect(keys.length).toEqual(10)
  })

})


describe('App handleClick function', () => {

  it('should change lastClicked state to people when people button is clicked', () => {

    const wrapper = mount(<App />)

    const peopleButton = wrapper.find('.ppl-btn')

    peopleButton.simulate('click')

    expect(wrapper.state('category')).toEqual('people')
  })

  it('should change lastClicked state to people when people button is clicked', () => {

    const wrapper = mount(<App />)

    const peopleButton = wrapper.find('.plnt-btn')

    peopleButton.simulate('click')

    expect(wrapper.state('category')).toEqual('planets')
  })

  it('should change lastClicked state to people when people button is clicked', () => {

    const wrapper = mount(<App />)

    const peopleButton = wrapper.find('.veh-btn')

    peopleButton.simulate('click')

    expect(wrapper.state('category')).toEqual('vehicles')
  })

  it('should change lastClicked state to people when people button is clicked', () => {

    const wrapper = mount(<App />)

    const peopleButton = wrapper.find('.fav-btn')

    peopleButton.simulate('click')

    expect(wrapper.state('category')).toEqual('fav')
  })
})
