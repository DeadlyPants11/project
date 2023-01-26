import axios from 'axios';

const KEY = '8378c884a6341b6bb6a7cfb362550079';
const BASE_URL = 'https://api.themoviedb.org/3';

const filmComtainer = document.querySelector('.film__container');

async function getFilmCard(content, page = 1) {
  try {
    console.log(page);
    const responce = await axios.get(
      `${BASE_URL}/trending/all/week?api_key=${KEY}&page=${page}`
    );
    const film = responce.data;
    console.log(film);
    film.page = page;
    return film;
  } catch (error) {
    return error.message;
  }
}

// getFilmCard((page = 1));
// async function getGenres(params) {
//   const respons = await axios.get(
//     `${BASE_URL}/genre/movie/list?api_key=${KEY}`
//   );
//   const genres = respons.data.genres;
//   return genres;
// }

// async function searchFilm(params, page = 1) {
//   const respons = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}`);
//   const allFilm = respons;
//   console.log(allFilm);
//   return allFilm;
// }
const paginationUl = document.querySelector('.pagination');
paginationUl.addEventListener('click', function (event) {
  if (event.target.nodeName.toLowerCase() !== 'li') {
    return;
  }
  if (event.target.textContent === '...') {
    return;
  }

  if (event.target.textContent === '🡸') {
    const newCurrentPage = (globalCurrentPage -= 1);
    getFilmCard('', newCurrentPage).then(resp => {
      createMarkup(resp.results);
      pagination(resp.page, resp.total_pages);
    });
    return;
  }
  if (event.target.textContent === '🡺') {
    getFilmCard('', (globalCurrentPage += 1)).then(resp => {
      createMarkup(resp.results);
      pagination(resp.page, resp.total_pages);
    });
    return;
  }
  const page = Number(event.target.textContent);
  getFilmCard('', page).then(resp => {
    createMarkup(resp.results);
    pagination(resp.page, resp.total_pages);
  });
});

getFilmCard().then(resp => {
  createMarkup(resp.results);
  pagination(resp.page, resp.total_pages);
});

function createMarkup(resp) {
  const filmCard = resp
    .map(({ poster_path, title, genre_ids, vote_average }) => {
      return `<div class="film__wrap">
  <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
  <ul>
    <li class="film__item">${title}</li>
    <li class="film__item">${genre_ids} | ${vote_average}</li>
  </ul>
</div>`;
    })
    .join('');

  filmComtainer.insertAdjacentHTML('beforeend', filmCard);
}

let globalCurrentPage = 0;

function pagination(currentPage, allPages) {
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
    markup += `<li>&#129144;</li>`;
    markup += `<li>1</li>`;
  }

  if (currentPage > 4) {
    markup += `<li>...</li>`;
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
    markup += `<li>...</li> `;
  }

  if (allPages > currentPage) {
    markup += `<li>${allPages}</li>`;
    markup += `<li class="arrow-right">&#129146;</li>`;
  }

  paginationUl.innerHTML = markup;
}
