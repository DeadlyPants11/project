import { onGetFilmDataByID } from './api';
import noImageAvailable from '../images/no-image-available.jpg';
import { refs } from './refs';
import { onCreateMarkup } from './modal-create-markup';
export { onCloseModal };

// ------------------------------------------------------
import { onGetFilmVideoByID } from './api';
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
  /*if (addToWatchedButton.textContent.toLowerCase() === 'add to watched') {
    addToWatchedButton.classList.remove('is-active');
  } else {
    addToWatchedButton.classList.add('is-active');
  }*/

  /* if (queueBtn.textContent.toLowerCase() === 'add to queue') {
    queueBtn.classList.remove('is-active');
  } else {
    queueBtn.classList.add('is-active');
  }*/
}

// --------------------------------------------------------------------------------

function openTrailer(filmId) {
  onGetFilmVideoByID(filmId)
    .then(data => {
      return data.data;
    })
    // .then(trailer => {
    //   if (trailer.length !== 0) {
    //     return showOpenTrailer(trailer[0].key);
    //   }
    // });

    .then(data => {
      createTrailerCard(data);
    });
}

// function showOpenTrailer(videoTrailer) {
//   refs.trailer.setAttribute(
//     'src',
//     `https://www.youtube.com/embed/${videoTrailer}`
//   );
// }

function createTrailerCard(data) {
  const videoArr = [];
  const trailerArr = data.results;
  trailerArr.forEach(results => {
    videoArr.push(results);
    // console.log(videoArr);
    // console.log(results);
  });
  const findByType = videoArr.find(e => e.type === 'Trailer');
  console.log(findByType);

  const key = Object.values(findByType);
  // console.log(key[3]);
  const name = Object.values(findByType);
  // console.log(name[2]);

  const markupTrailer = `<div class="iframe__div">
              <button data-modal-close type="button" class="button-close">
              <svg class="button-close__icon" width="14" height="14">
              <use href="${refs.IconCloseHref}"></use>
              </svg>
              </button>
              <iframe
                  class="iframe-video"
                  width="760" height="515"
                  src="https://www.youtube.com/embed/${key[3]}"
                  title="${name[2]}" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture;
                  web-share" allowfullscreen>
                  </iframe></div>`;

  refs.backdrop.innerHTML = markupTrailer;

  let closeModalButton =
    refs.backdrop.getElementsByClassName('button-close')[0];
  closeModalButton.addEventListener('click', onCloseModal);
  closeModalButton.addEventListener('click', onRemoveMarkupModal);

  // function onRemoveMarkupModal() {
  //   refs.backdrop.innerHTML = ` `;
  // }
}

// ===============================================================

function onRemoveMarkupModal() {
  refs.backdrop.innerHTML = ` `;
}

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

// if (data.results.length > 0) {
//   console.log(data.results);
//   var videoArr = [];
//   const filmRes = data.results;

//   filmRes.forEach(({ name, key, type }) => {
//     // filmRes.find(item.id);
//     if (type === 'Trailer') {
//       videoArr.push(
//         `<div class="iframe__div ">
//             <button data-modal-close type="button" class="button-close">
//             <svg class="button-close__icon" width="14" height="14">
//             <use href="${refs.IconCloseHref}"></use>
//             </svg>
//             </button>
//             <iframe
//                 class="iframe-video"
//                 width="760" height="515"
//                 src="https://www.youtube.com/embed/${key}"
//                 title="${name}" frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write;
//                 encrypted-media; gyroscope; picture-in-picture;
//                 web-share" allowfullscreen>
//                 </iframe></div>`
//       );
//     }
//   });

// refs.backdrop.innerHTML = arrayFor.join('');

// let closeModalButton =
//   refs.backdrop.getElementsByClassName('button-close')[0];
// closeModalButton.addEventListener('click', onCloseModal);
// closeModalButton.addEventListener('click', onRemoveMarkupModal);
