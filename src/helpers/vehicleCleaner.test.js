import vehicleCleaner from './vehicleCleaner';
import data from '../stub/people.json';

describe('vehicleCleaner tests', () => {
  test.skip('vehicleCleaner is a function', () => {
    expect(typeof vehicleCleaner).toBe('function')
  })

  test.skip('vehicleCleaner returns an object', () => {
    const cleanData = vehicleCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test.skip('vehicleCleaner returns 10 people objects', () => {
    const cleanData = vehicleCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(10)
  })
})
