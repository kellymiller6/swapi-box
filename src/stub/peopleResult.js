import fetchMock from 'fetch-mock';
import people from '../stub/people.json'

fetchMock.get('http://swapi.co/api/planets/1/', {status: 200, body: people})
fetchMock.get('http://swapi.co/api/planets/5/', {status: 200, body: people})
