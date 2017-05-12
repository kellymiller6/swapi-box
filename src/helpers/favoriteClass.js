const favoriteClass=(name, favorites) => {
    if (favorites.length === 0) {
      return ""
    } else if (favorites.length) {
      let match = favorites.find((val) => {
        return val.name === name
      })
      if (match) {
        return 'selected'
      }
    }
  }

  export default favoriteClass;
