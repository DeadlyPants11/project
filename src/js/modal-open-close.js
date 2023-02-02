import { onGetFilmDataByID } from './api';
import noImageAvailable from '../images/no-image-available.jpg';
import { refs } from './refs';
import { onCreateMarkup } from './modal-create-markup';
export { onCloseModal };

// ------------------------------------------------------

import { openTrailer } from './trailer';
// -----------------------------------------------------

import { delListeners } from './add-to-localstorage-btn';

const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

refs.filmContainer.addEventListener('click', onOpenModal);

function onOpenModal(e) {
  e.preventDefault();

  if (e.target === e.currentTarget) {
    return;
  }

  window.addEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.remove('visually-hidden');

  let filmId = e.target.closest('li').getAttribute('data-id');

  onGetFilmDataByID(filmId)
    .then(data => {
      return data.data;
    })
    .then(data => {
      if (!data.poster_path) {
        data.poster_path = noImageAvailable;
      } else {
        data.poster_path = BASE_POSTER_URL + data.poster_path;
      }

      if (!data.title) {
        title = 'No Title';
      }

      if (!data.vote_average) {
        data.vote_average = 'not found';
      } else {
        data.vote_average = String(data.vote_average).slice(0, 3);
      }

      if (!data.vote_count) {
        data.vote_count = 'not found';
      }

      if (!data.popularity) {
        data.popularity = 'not found';
      }

      if (!data.genres.length) {
        data.genres = 'genre not found';
      } else {
        data.genres = data.genres.map(genre => genre.name).join(', ');
      }

      if (!data.overview) {
        data.overview = 'Description not found';
      }
      onCreateMarkup(data);
      // =================VIDEO================

      document.getElementById(filmId).addEventListener('click', () => {
        openTrailer(filmId);
      });
    });
  // add/remove is-active class on buttons
  // if (addToWatchedButton.textContent.toLowerCase() === 'add to watched') {
  //   addToWatchedButton.classList.remove('is-active');
  // } else {
  //   addToWatchedButton.classList.add('is-active');
  // }

  // if (queueBtn.textContent.toLowerCase() === 'add to queue') {
  //   queueBtn.classList.remove('is-active');
  // } else {
  //   queueBtn.classList.add('is-active');
  // }
}

// --------------------------------------------------------------------------------

function onCloseModal() {
  delListeners();

  window.removeEventListener('keydown', onEscKeyPress);
  refs.backdrop.classList.add('visually-hidden');
}

function onEscKeyPress(e) {
  if (e.code === 'Escape') {
    onCloseModal();
  }
}

refs.backdrop.addEventListener('click', onClickBackdrop);
function onClickBackdrop(e) {
  if (e.currentTarget === e.target) {
    onCloseModal();
  }
}
