import FetchFilms from './fetch-films';

export default function getFilmCard(query = '', page = 1) {
  const fetch = new FetchFilms();
  //  Зробити завантаження з локал сторадж
  // Якщо не False то робимо раннє повернення
  // loadFromStorage(query, page);

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
  // console.log(query, page);
  try {
    const loadedFilms = localStorage.getItem('CURRENT_FILMS');
    // Розпарсити дані якщо такі є і порівняти сторінку і пошуковий запит
    // Якщо однакові з поточними вернути результат,якщо ні то порожні дані
    // loadedFilms === JSON.parse(loadedFilms);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
