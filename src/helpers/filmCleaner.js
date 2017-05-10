const filmCleaner = (data) => {
  const array = data.results;
  const film = array.map(film =>   film.opening_crawl )
  console.log(film);
  return film
}
export default filmCleaner;
