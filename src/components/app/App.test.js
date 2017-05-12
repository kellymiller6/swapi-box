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

  const resolvePromise = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

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

describe('App Component API Calls', () => {
  const waitingFunc = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should have film quote scroll if film API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 200,
      body: films,
    });

    fetchMock.get('*', { status: 200 });

    const wrapper = mount(<App />);

    await waitingFunc();

    expect(wrapper.state('scroll').length).toEqual(7);
  });

  it('should have people in state if people API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: people,
    });

    fetchMock.get('*', { status: 200 });
    const wrapper = mount(<App />);
    await waitingFunc();
    const keys = Object.keys(wrapper.state('people'));

    expect(keys.length).toEqual(10);
  });

  it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: planets,
    });

    fetchMock.get('*', { status: 200 });
    const wrapper = mount(<App />);
    await waitingFunc();
    const keys = Object.keys(wrapper.state('planets'));

    expect(keys.length).toEqual(10);
  });

  it('should have planets in state if planets API call returns 200', async () => {
    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: vehicles,
    });

    fetchMock.get('*', { status: 200 });
    const wrapper = mount(<App />);
    await waitingFunc();
    const keys = Object.keys(wrapper.state('vehicles'));

    expect(keys.length).toEqual(10);
  });
});

describe('App handleClick function', () => {
  it('should change lastClicked state to people when people button is clicked', () => {
    const wrapper = mount(<App />);
    const peopleButton = wrapper.find('.ppl-btn');
    peopleButton.simulate('click');

    expect(wrapper.state('category')).toEqual('people');
  });

  it('should change lastClicked state to people when people button is clicked', () => {
    const wrapper = mount(<App />);
    const peopleButton = wrapper.find('.plnt-btn');
    peopleButton.simulate('click');

    expect(wrapper.state('category')).toEqual('planets');
  });

  it('should change lastClicked state to people when people button is clicked', () => {
    const wrapper = mount(<App />);
    const peopleButton = wrapper.find('.veh-btn');
    peopleButton.simulate('click');

    expect(wrapper.state('category')).toEqual('vehicles');
  });

  it('should change lastClicked state to people when people button is clicked', () => {
    const wrapper = mount(<App />);
    const peopleButton = wrapper.find('.fav-btn');
    peopleButton.simulate('click');

    expect(wrapper.state('category')).toEqual('fav');
  });
});

describe('App handleToggle function', () => {
  const waitingFunc = () => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  beforeEach(() => {
    fetchMock.get('http://swapi.co/api/films/', {
      status: 200,
      body: films,
    });
    fetchMock.get('http://swapi.co/api/planets/', {
      status: 200,
      body: planets,
    });
    fetchMock.get('http://swapi.co/api/people/', {
      status: 200,
      body: people,
    });
    fetchMock.get('http://swapi.co/api/vehicles/', {
      status: 200,
      body: vehicles,
    });
    fetchMock.get('*', { status: 200 });
  });

  afterEach(() => {
    expect(fetchMock.calls().unmatched).toEqual([]);
    fetchMock.restore();
  });

  it('should add the correct card obj to favorites when the card is clicked', async () => {
    const wrapper = mount(<App />);
    await waitingFunc();

    const peopleButton = wrapper.find('.ppl-btn');
    peopleButton.simulate('click');

    const btnToBeClicked = wrapper.find('#R2-D2');

    btnToBeClicked.simulate('click');
    await waitingFunc();
    expect(btnToBeClicked.props().id).toBe('R2-D2');
    expect(wrapper.state('favorites')[0].name).toEqual('R2-D2');
    expect(wrapper.state('favorites')[0].name).not.toEqual('Luke Skywalker');
  });

  it('should remove the correct card obj from favorites if it is clicked when it is already favorited', async () => {
    const wrapper = mount(<App />);

    await waitingFunc();

    const peopleButton = wrapper.find('.ppl-btn');
    peopleButton.simulate('click');

    const btnToBeClicked = wrapper.find('#C-3PO');


    btnToBeClicked.simulate('click');
    expect(wrapper.state('favorites').length).toEqual(1);

    await waitingFunc();

    btnToBeClicked.simulate('click');
    expect(wrapper.state('favorites').length).toEqual(0);
  });

  it('should be able to add multiple card to favorites', async () => {
    const wrapper = mount(<App />);

    await waitingFunc();

    const peopleButton = wrapper.find('.ppl-btn');
    peopleButton.simulate('click');

    const firstCard = wrapper.find('#C-3PO');
    const secondCard = wrapper.find('#R2-D2');


    firstCard.simulate('click');
    secondCard.simulate('click');
    expect(wrapper.state('favorites').length).toEqual(2);
    expect(wrapper.state('favorites').length).not.toEqual(1);
  });
});
