const favoriteClass = (name, favorites) => {
  if (favorites.length === 0) {
    return '';
  } else if (favorites.length) {
    const match = favorites.find(val => val.name === name);
    if (match) {
      return 'selected';
    }
  }
};

export default favoriteClass;
