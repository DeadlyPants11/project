import FetchFilms from './on-search';
import onTrendingSearchFilm from './local-storage';
export default function getFilmCard(query = '', page = 1) {
  const fetch = new FetchFilms();
  return fetch.fetchFilms(query, page);
}
