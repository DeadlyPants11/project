export default function loadFromStorage(query, page) {
  try {
    const getLoadedFilms = localStorage.getItem('CURRENT_FILMS');
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    if (parseLoadedFilms.page === page && parseLoadedFilms.query === query) {
      return parseLoadedFilms;
    }
    return false;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
