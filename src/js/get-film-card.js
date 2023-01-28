import FetchFilms from './fetch-films';

export default function getFilmCard(query = '', page = 1) {
  const fetch = new FetchFilms();
  return fetch.fetchFilms(query, page);
}
