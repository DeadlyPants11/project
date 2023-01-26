import FetchFilms from './fetch-films';
import createFilmCardMarkup from './film-card-markup';

const refs = {
  filmContainer: document.querySelector('.film__container'),
  searchForm: document.querySelector('.search__form'),
};

const KEY = '8378c884a6341b6bb6a7cfb362550079';
const BASE_URL_TRENDING_FILMS =
  'https://api.themoviedb.org/3/trending/movie/week';

const fetchPopularFilms = new FetchFilms({
  authKey: KEY,
  baseUrl: BASE_URL_TRENDING_FILMS,
  isNeedQuery: false,
});

fetchPopularFilms
  .fetchFilms()
  .then(res => {
    refs.filmContainer.insertAdjacentHTML(
      'beforeend',
      createFilmCardMarkup(res.results)
    );
  })
  .catch(error => console.log(error));

const BASE_URL_FILMS = 'https://api.themoviedb.org/3/search/movie';

const fetchFilmsByQuery = new FetchFilms({
  authKey: KEY,
  baseUrl: BASE_URL_FILMS,
  isNeedQuery: true,
});

function onSearchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  query = form.elements.name.value;
  fetchFilmsByQuery.query = query;
  if (!query) {
    fetchFilmsByQuery.query = fetchFilmsByQuery.lastQuery;
    return;
  }
  fetchFilmsByQuery
    .fetchFilms()
    .then(res => {
      if (res.results.length === 0) {
        throw new Error();
      }
      fetchFilmsByQuery.resetPage();
      refs.filmContainer.innerHTML = '';
      refs.filmContainer.insertAdjacentHTML(
        'beforeend',
        createFilmCardMarkup(res.results)
      );
    })
    .catch(error => {
      fetchFilmsByQuery.query = fetchFilmsByQuery.lastQuery;
    });
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
