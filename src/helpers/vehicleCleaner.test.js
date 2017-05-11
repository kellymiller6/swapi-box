import vehicleCleaner from './vehicleCleaner';
import data from '../stub/vehicles.json';

describe('vehicleCleaner tests', () => {
  test('vehicleCleaner is a function', () => {
    expect(typeof vehicleCleaner).toBe('function')
  })

  test('vehicleCleaner returns an object', () => {
    const cleanData = vehicleCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test('vehicleCleaner returns 10 people objects', () => {
    const cleanData = vehicleCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(10)
  })

  test('vehicleCleaner returns Sand Crawler as first key', () => {
    const cleanData = vehicleCleaner(data)
    expect(Object.keys(cleanData)[0]).toEqual('Sand Crawler')
  })
})
