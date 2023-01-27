import axios from 'axios';
import axios from 'axios';

const KEY = '8378c884a6341b6bb6a7cfb362550079';
const BASE_URL = 'https://api.themoviedb.org/3';
const GENRES_NAME = 'genresNames';
const SEARCH_RESULT_QUERY = '';
const filmComtainer = document.querySelector('.film__container');

async function getGenresArray() {
  try {
    const respons = await axios.get(
      `${BASE_URL}/genre/movie/list?api_key=${KEY}`
    );
    const genres = respons.data.genres;
    return genres;
  } catch (error) {
    return error.message;
  }
}
getGenresArray().then(resp => {
  localStorage.setItem(GENRES_NAME, JSON.stringify(resp));
});

function getGenresName(array) {
  const saveGenresName = localStorage.getItem(GENRES_NAME);
  const genresNameData = JSON.parse(saveGenresName);
  console.log(genresNameData);
  for (const genName of genresNameData) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] === genName.id) {
        array[i] = ' ' + genName.name;
        array[2] = ' Other';
      }
    }
  }
}

export function createMarkup(resp) {
  const filmCard = resp
    .map(({ poster_path, title, genre_ids, release_date }) => {
      getGenresName(genre_ids);
      if (release_date) {
        const releaseDate = release_date.slice(0, 4);
        const genreArrayShort = genre_ids.slice(0, 3);
        return `<li class="film-list__item">
            <a href="#" class="film-list__link">              
              <img class="film-list__img" src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
              <div class="film-list__box">              
                  <h2 class="film-list__title">${title}</h2>
                  <p class="film-list__genres">${genreArrayShort} <span class="film-list__date"></span>${releaseDate}</p>
              </div>                          
            </a>
          </li>`;
      }
    })
    .join('');

  filmComtainer.insertAdjacentHTML('beforeend', filmCard);
}
