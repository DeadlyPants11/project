import { createMarkup } from '../markup/markupfilmcard';
import getFilmCard from './get-film-card';

const paginationUl = document.querySelector('.pagination');
const filmComtainer = document.querySelector('.film__container');
const search = document.querySelector('.form__input');

paginationUl.addEventListener('click', onPaginationClick);

function onPaginationClick(event) {
  const query = search.value.trim();
  if (event.target.textContent === '...') {
    return;
  }
  if (event.target.nodeName.toLowerCase() !== 'li') {
    return;
  }
  filmComtainer.innerHTML = '';

  if (event.target.textContent === '🡸') {
    const newCurrentPage = (globalCurrentPage -= 1);
    getFilmCard(query, newCurrentPage).then(resp => {
      createMarkup(resp.results);
      pagination(resp.page, resp.total_pages);
    });
    return;
  }
  if (event.target.textContent === '🡺') {
    getFilmCard(query, (globalCurrentPage += 1)).then(resp => {
      createMarkup(resp.results);
      pagination(resp.page, resp.total_pages);
    });
    return;
  }
  const page = Number(event.target.textContent);
  getFilmCard(query, page).then(resp => {
    createMarkup(resp.results);
    pagination(resp.page, resp.total_pages);
  });
}

getFilmCard().then(resp => {
  createMarkup(resp.results);
  pagination(resp.page, resp.total_pages);
});

let globalCurrentPage = 0;

export function pagination(currentPage, allPages) {
  const typeOfValue = typeof currentPage;
  if (typeOfValue !== 'number') {
    console.error('currentPage:Not a number');
    return;
  }

  const typeOfAllPages = typeof allPages;
  if (typeOfAllPages !== 'number') {
    console.error('allPages: Not a number');
    return;
  }

  let markup = '';
  let beforeTwoPages = currentPage - 2;
  let beforePage = currentPage - 1;
  let afterPage = currentPage + 1;
  let afterTwoPages = currentPage + 2;
  globalCurrentPage = currentPage;

  if (currentPage > 1) {
    markup += `<li class="arrow-right">&#129144;</li>`;
    markup += `<li>1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li class="dots">...</li>`;
  }

  if (currentPage > 3) {
    markup += `<li>${beforeTwoPages}</li>`;
  }

  if (currentPage > 2) {
    markup += `<li>${beforePage}</li>`;
  }

  markup += `<li class="pagination-current">${currentPage}</li>`;

  if (allPages - 1 > currentPage) {
    markup += `<li>${afterPage}</li>`;
  }

  if (allPages - 2 > currentPage) {
    markup += `<li>${afterTwoPages}</li>`;
  }

  if (allPages - 3 > currentPage) {
    markup += `<li class="dots">...</li> `;
  }

  if (allPages > currentPage) {
    markup += `<li>${allPages}</li>`;
    markup += `<li class="arrow-right">&#129146;</li>`;
  }

  paginationUl.innerHTML = markup;
}
