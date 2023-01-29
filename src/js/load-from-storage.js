export default function loadFromStorage(query, page) {
  try {
    const getLoadedFilms = localStorage.getItem('CURRENT_FILMS');
    // Розпарсити дані якщо такі є і порівняти сторінку і пошуковий запит
    // Якщо однакові з поточними вернути результат,якщо ні то порожні дані
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    // const loadedParsedFilms = loadedForParseFilms.find(array => array.query && array.page  ===)
    if (parseLoadedFilms.page === page && parseLoadedFilms.query === query) {
      return parseLoadedFilms;
    }
    return false;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
