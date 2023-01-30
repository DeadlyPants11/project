import FetchFilms from './fetch-films';
import { createMarkup } from '../markup/markupfilmcard';
import { pagination } from './pagination';
import getFilmCard from './get-film-card';
const refs = {
  filmContainer: document.querySelector('.film__container'),
  searchForm: document.querySelector('.search__form'),
  notification: document.querySelector('.container__notification'),
};

const fetchFilmsByQuery = new FetchFilms();

function onSearchFormSubmit(e) {
  e.preventDefault();
  const form = e.currentTarget;
  const query = form.elements.name.value.trim();
  fetchFilmsByQuery.query = query;
  if (!query) {
    fetchFilmsByQuery.query = fetchFilmsByQuery.lastQuery;
    form.elements.name.value = fetchFilmsByQuery.lastQuery;
    refs.notification.textContent =
      'Search result not successful. Enter the correct movie name';
    const cleantimer = setTimeout(
      () => (refs.notification.textContent = ''),
      3000
    );
    return;
  }
  getFilmCard(query, 1)
    .then(res => {
      if (res.results.length === 0) {
        form.elements.name.value = fetchFilmsByQuery.lastQuery;
        refs.notification.textContent =
          'Search result not successful. Enter the correct movie name';
        const cleantimer = setTimeout(
          () => (refs.notification.textContent = ''),
          3000
        );
        throw new Error();
      }
      fetchFilmsByQuery.lastQuery = query;
      refs.filmContainer.innerHTML = '';
      refs.filmContainer.insertAdjacentHTML(
        'beforeend',
        createMarkup(res.results)
      );
      pagination(res.page, res.total_pages);
    })

    .catch(error => {
      fetchFilmsByQuery.query = fetchFilmsByQuery.lastQuery;
    });
}

refs.searchForm.addEventListener('submit', onSearchFormSubmit);
