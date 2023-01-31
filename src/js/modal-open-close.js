import { onGetFilmDataByID } from './api';
import noImageAvailable from '../images/no-image-available.jpg';
import { refs } from './refs';
import { onCreateMarkup } from './modal-create-markup';
import { onGetFilmVideoByID } from './api';

export { onCloseModal };
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500/';

const watchBtn = document.querySelector('.watch-trailer__btn');
const overlayContent = document.querySelector('.overlay-content');

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
}

function openTrailer(filmId) {
  onGetFilmVideoByID(filmId)
    .then(data => {
      return data.data;
    })
    .then(data => {
      if (data.results.length > 0) {
        console.log(data.results);
        var videoArr = [];
        // const filmRes = data.results;
        filmRes.forEach(({ name, key, type }) => {
          // filmRes.find(item.id);
          if (type === 'Trailer') {
            return videoArr.push(
              `<div class="iframe__div ">
              <button data-modal-close type="button" class="button-close">
              <svg class="button-close__icon" width="14" height="14">
              <use href="${refs.IconCloseHref}"></use>
              </svg>
              </button>
              <iframe 
                  class="iframe-video"
                  width="760" height="515" 
                  src="https://www.youtube.com/embed/${key}" 
                  title="${name}" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; 
                  encrypted-media; gyroscope; picture-in-picture; 
                  web-share" allowfullscreen>
                  </iframe></div>`
            );
          }
        });

        refs.backdrop.innerHTML = videoArr.join('');

        let closeModalButton =
          refs.backdrop.getElementsByClassName('button-close')[0];
        closeModalButton.addEventListener('click', onCloseModal);
        closeModalButton.addEventListener('click', onRemoveMarkupModal);
      }
    });
}

function onRemoveMarkupModal() {
  refs.backdrop.innerHTML = ` `;
}

// ===============================================================

function onCloseModal() {
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
