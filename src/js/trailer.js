import Notiflix from 'notiflix';
import { onGetFilmVideoByID } from './api';
import { refs } from './refs';

const iFrame = document.querySelector('.backdrop');

export function openTrailer(filmId) {
  onGetFilmVideoByID(filmId)
    .then(data => {
      return data.data;
    })
    .then(data => {
      createTrailerCard(data);
    });
}

function createTrailerCard(data) {
  if (data.results.length === 0) {
    Notiflix.Notify.info('Oops, no trailer');
  }
  const videoArr = [...data.results];

  const findByType = videoArr.find(e => e.type === 'Trailer');
  const values = Object.values(findByType);
  const markupTrailer = `<div class="iframe__div">
              <iframe
                  class="iframe-video"
                  width="280" height="230"
                  src="https://www.youtube.com/embed/${values[3]}"
                  title="${values[2]}" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture;
                  web-share" allowfullscreen>
                  </iframe>
                  <button data-modal-close type="button" class="button-close_trailer">
              <svg class="button-close__icon" width="14" height="14">
              <use href="${refs.IconCloseHref}"></use>
              </svg>
              </button>
              </div>`;

  refs.backdrop.innerHTML = markupTrailer;

  let closeModalButton = refs.backdrop.getElementsByClassName(
    'button-close_trailer'
  )[0];
  closeModalButton.addEventListener('click', onCloseModal);
  closeModalButton.addEventListener('click', onRemoveMarkupModal);
}

// ===============================================================

function onRemoveMarkupModal() {
  refs.backdrop.innerHTML = ` `;
}

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
