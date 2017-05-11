const favoriteClass=(name, favorites) => {
    if (favorites.length === 0) {
      // console.log('empty string');
      return ""
    } else if (favorites.length) {
      // console.log('not empty');
      let match = favorites.find((val) => {
        // console.log(val.name);
        return val.name === name
      })
      if (match) {
        // console.log('matches');
        return 'selected'
      }
    }
  }

  export default favoriteClass;
