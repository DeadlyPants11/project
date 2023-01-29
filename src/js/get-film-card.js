import FetchFilms from './fetch-films';
import loadFromStorage from './load-from-storage';

export default function getFilmCard(query = '', page = 1) {
  const fetch = new FetchFilms();
  const filmsInStorage = loadFromStorage(query, page);
  if (filmsInStorage) {
    return Promise.resolve(filmsInStorage.results);
  }

  return fetch.fetchFilms(query, page).then(data => {
    try {
      const filmsToSave = JSON.stringify({
        page: page,
        query: query,
        results: data,
      });
      localStorage.setItem('CURRENT_FILMS', filmsToSave);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
    return data;
  });
}
