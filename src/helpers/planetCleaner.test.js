import planetCleaner from './planetCleaner';
import data from '../stub/planets.json';

describe('planetCleaner tests', () => {
  test.skip('planetCleaner is a function', () => {
    expect(typeof planetCleaner).toBe('function')
  })

  test.skip('planetCleaner returns an object', () => {
    const cleanData = planetCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test.skip('planetCleaner returns 10 people objects', () => {
    const cleanData = planetCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(10)
  })

  test.skip('planetCleaner returns Alderaan as first key', () => {
    const cleanData = planetCleaner(data)
    expect(Object.keys(cleanData)[0]).toEqual('Alderaan')
  })
})
