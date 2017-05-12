import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchMock from 'fetch-mock';
import App from './App';
import films from '../../stub/films.json';
import people from '../../stub/people.json';
import planets from '../../stub/planets.json';
import vehicles from '../../stub/vehicles.json';

describe('App Test', () => {
  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  const resolvePromise = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };

  it('should fetch film data', async () => {
    fetchMock.get('http://swapi.co/api/films/', { status: 200, body: films });
    fetchMock.get('*', { status: 200 });

    const wrapper = mount(<App/>);
    expect(fetchMock.called()).toEqual(true);
    expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/');
    await resolvePromise();
    expect(wrapper.state('scroll').length).toEqual(7);
  });

    it.skip('should fetch people data', async () => {
      fetchMock.get('http://swapi.co/api/people/', { status: 200, body: people });
      fetchMock.get('http://swapi.co/api/planets/', { status: 200, body: planets });
      fetchMock.get('http://swapi.co/api/vehicles/', { status: 200, body: vehicles });
      fetchMock.get('http://swapi.co/api/films/', { status: 200, body: films });
      fetchMock.get('http://swapi.co/api/planets/1', { status: 200, body: planets });
      fetchMock.get('http://swapi.co/api/people/1', { status: 200, body: people });

      const wrapper = mount(<App/>);
      expect(fetchMock.called()).toEqual(true);
      expect(fetchMock.lastUrl()).toEqual('http://swapi.co/api/films/');
      await resolvePromise();
      expect(wrapper.state('people')).toBe('');
    });
});
