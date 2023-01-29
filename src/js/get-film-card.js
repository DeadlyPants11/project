import FetchFilms from './fetch-films';

export default function getFilmCard(query = '', page = 1) {
  const fetch = new FetchFilms();
  // const getLoadedFilms = localStorage.getItem('CURRENT_FILMS');
  // if (getLoadedFilms) {
  //   return getLoadedFilms;
  // }
  //  Зробити завантаження з локал сторадж
  // Якщо не False то робимо раннє повернення
  loadFromStorage(query, page);

  return fetch.fetchFilms(query, page).then(data => {
    try {
      const filmsToSave = JSON.stringify({
        page: page,
        query: query,
        results: data.results,
      });
      localStorage.setItem('CURRENT_FILMS', filmsToSave);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
    return data;
  });
}

function loadFromStorage(query, page) {
  console.log(query, page);
  try {
    const getLoadedFilms = localStorage.getItem('CURRENT_FILMS');
    // Розпарсити дані якщо такі є і порівняти сторінку і пошуковий запит
    // Якщо однакові з поточними вернути результат,якщо ні то порожні дані
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    // const loadedParsedFilms = loadedForParseFilms.find(array => array.query && array.page  ===)
    console.log(parseLoadedFilms);
    if (parseLoadedFilms.page === page && parseLoadedFilms.query === query) {
      return parseLoadedFilms.results;
      console.log(parseLoadedFilms.results);
    }
    return parseLoadedFilms;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
