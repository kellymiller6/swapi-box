const filmCleaner = (data) => {
  const array = data.results;
  const films = array.map(film => film.opening_crawl);
  return films;
};
export default filmCleaner;
