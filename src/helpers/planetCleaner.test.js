import planetCleaner from './planetCleaner';
import data from '../stub/people.json';

describe('planetCleaner tests', () => {
  test('planetCleaner is a function', () => {
    expect(typeof planetCleaner).toBe('function')
  })

  test('planetCleaner returns an object', () => {
    const cleanData = planetCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test('planetCleaner returns 10 people objects', () => {
    const cleanData = planetCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(10)
  })
})
