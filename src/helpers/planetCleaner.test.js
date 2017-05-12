import planetCleaner from './planetCleaner';
import data from '../stub/planets.json';

describe('planetCleaner tests', () => {
  test('planetCleaner is a function', () => {
    expect(typeof planetCleaner).toBe('function');
  });

  test('planetCleaner returns an object', () => {
    const cleanData = planetCleaner(data);
    expect(typeof cleanData).toBe('object');
  });

  test('planetCleaner returns 2 planet objects', () => {
    const cleanData = planetCleaner(data);
    expect(Object.keys(cleanData).length).toEqual(10);
  });

  test('planetCleaner returns Tatooine as first key', () => {
    const cleanData = planetCleaner(data);
    expect(Object.keys(cleanData)[0]).toEqual('Alderaan');
  });
});
