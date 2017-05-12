const filmCleaner = (data) => {
  const array = data.results;
  const film = array.map(film => film.opening_crawl )
  return film
}
export default filmCleaner;
