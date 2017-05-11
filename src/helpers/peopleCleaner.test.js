import peopleCleaner from './peopleCleaner';
import data from '../stub/people.json';

describe('peopleCleaner tests', () => {
  test.skip('peopleCleaner is a function', () => {
    expect(typeof peopleCleaner).toBe('function')
  })

  test.skip('peopleCleaner returns an object', () => {
    const cleanData = peopleCleaner(data)
    expect(typeof cleanData).toBe('object')
  })

  test.skip('peopleCleaner returns 10 people objects', () => {
    const cleanData = peopleCleaner(data)
    expect(Object.keys(cleanData).length).toEqual(10)
  })

  test.skip('peopleCleaner returns Luke Skywalker as first key', () => {
    const cleanData = peopleCleaner(data)
    expect(Object.keys(cleanData)[0]).toEqual('Luke Skywalker')
  })
})
