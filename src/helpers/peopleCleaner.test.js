import peopleCleaner from './peopleCleaner';
import data from '../stub/people.json';

describe('peopleCleaner tests', () => {
  test('peopleCleaner is a function', () => {
    expect(typeof peopleCleaner).toBe('function')
  })

  test('peopleCleaner returns an object', () => {
    const cleanData = peopleCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test('peopleCleaner returns 2 people objects', () => {
    const cleanData = peopleCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(2)
  })

  test('peopleCleaner returns Luke Skywalker as first key', () => {
    const cleanData = peopleCleaner(data)
    expect(Object.keys(cleanData)[0]).toEqual('Luke Skywalker')
  })
})
