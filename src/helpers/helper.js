import peopleCleaner from './peopleCleaner'
import planetCleaner from './planetCleaner'
import vehicleCleaner from './vehicleCleaner'

const cleaner = (input, obj) => {
  if (input === 'people') {
    return peopleCleaner(obj)
  } else if (input === 'planets') {
    return planetCleaner(obj)
  } else if (input === 'vehicles') {
    return vehicleCleaner(obj)
  }
}

export default cleaner;
