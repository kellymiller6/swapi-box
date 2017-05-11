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
import peopleResult from '../../stub/peopleResult'
import testHelper from '../../stub/testHelper'

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

    it.skip('should fetch film data', async () => {
      fetchMock.get('http://swapi.co/api/films/', {status: 200, body: films})
      fetchMock.get('*', {status: 200})

      const wrapper = mount(<App/>)
      expect(fetchMock.called()).toEqual(true)
      expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/')
      await resolvePromise()
      // expect(wrapper.state('scroll')).toBe(filmResult)
    })

    it('should fetch people data', async () => {
      fetchMock.get('http://swapi.co/api/people/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/planets/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/vehicles/', {status: 200, body: vehicles})
      fetchMock.get('http://swapi.co/api/films/', {status: 200, body: films})
      fetchMock.get('http://swapi.co/api/planets/1/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/planets/5/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/planets/8/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/people/5/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/2/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/planets/68/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/people/2/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/planets/68/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/planets/68/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/planets/2/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/people/1/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/4/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/planets/20/', {status: 200, body: planets})
      fetchMock.get('http://swapi.co/api/people/6/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/species/1/', {status: 200, body: species})
      fetchMock.get('http://swapi.co/api/species/1/', {status: 200, body: species})
      fetchMock.get('http://swapi.co/api/people/7/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/8/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/9/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/11/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/43/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/62/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/68/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/81/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/26/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/30/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/3/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/21/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/36/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/37/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/38/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/39/', {status: 200, body: people})
      fetchMock.get('http://swapi.co/api/people/42/', {status: 200, body: people})

      const wrapper = mount(<App/>)
      expect(fetchMock.called()).toEqual(true)
      expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/')
      await resolvePromise()
      expect(wrapper.state('people')).toBe('')

    })


})
