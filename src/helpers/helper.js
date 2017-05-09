import peopleCleaner from './peopleCleaner'
import planetCleaner from './planetCleaner'
import vehicleCleaner from './vehicleCleaner'

const cleaner = (input, obj) => {
  switch(input){
    case 'people':
      return peopleCleaner(obj);
      break;
    case 'planets':
      return planetCleaner(obj);
      break;
    case 'vehicles':
      return vehicleCleaner(obj)
      break;
  }
}

export default cleaner
