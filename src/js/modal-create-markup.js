import { refs } from './refs';
import { onCloseModal } from './modal-open-close';
export { onCreateMarkup, onRemoveMarkupModal };

import { addRefsAndListeners, delListeners } from './add-to-localstorage-btn';

function onCreateMarkup({
  poster_path,
  title,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
  id,
}) {
  const filmInfoMarkup = `<div class="modal" data-id=${id}>
  <button data-modal-close type="button" class="button-close">
    <svg class="button-close__icon" width="14" height="14">
      <use href="${refs.IconCloseHref}"></use>
    </svg>
  </button>
  <div class="modal-container">
  <div class="modal-container__img">
    <img
      class="modal-container__img"
      src="${poster_path}"
      alt="${title}"
    />
    <div class="trailer-btn">
      <button type="button" class="watch-trailer__btn " id="${id}">WATCH TRAILER</button></div>
      </div>
    <div class="modal-info__container">
      <h2 class="modal-info__title">${title}</h2>
      <table class="modal-info-table">
        <tbody class="modal-info-table__body>
          <tr class="modal-info-table__row">
            <td class="modal-info-table__title">Vote / Votes</td>
            <td class="modal-info-table__data">
              <span class="modal-info-table__data-highlight">${vote_average}</span> 
              <span class="modal-info-table__data-highlight-item">/</span> 
              <span class="modal-info-table__data-highlight-value">${vote_count}</span></td>
          </tr>
          <tr class="modal-info-table__row">
            <td class="modal-info-table__title">Popularity</td>
            <td class="modal-info-table__data">${popularity}</td>
          </tr>
          <tr class="modal-info-table__row">
            <td class="modal-info-table__title">Original Title</td>
            <td class="modal-info-table__data">${title}</td>
          </tr>
          <tr class="modal-info-table__row">
            <td class="modal-info-table__title">Genre</td>
            <td class="modal-info-table__data">${genres}</td>
          </tr>
        </tbody>
      </table>
      <h3 class="modal-info__title-description">About</h3>
      <p class="modal-info__description">
        ${overview}
      </p>

      <ul class="modal-info__button-list">
        <li class="modal-info__button-list-item">
          <button type="button" class="modal-button btn-add-to-watched">ADD TO WATCHED</button></li>
        <li class="modal-info__button-list-item">
          <button type="button" class="modal-button btn-add-to-queue">ADD TO QUEUE</button></li>
          

      </ul>
    </div>
  </div>
</div>`;
  onAddMarkupFromDOM(filmInfoMarkup);
  let closeModalButton =
    refs.backdrop.getElementsByClassName('button-close')[0];
  closeModalButton.addEventListener('click', onCloseModal);

  addRefsAndListeners();

  closeModalButton.addEventListener('click', onRemoveMarkupModal);

  console.log(`📌  closeModalButton`, closeModalButton);
}

function onAddMarkupFromDOM(markup) {
  onRemoveMarkupModal();
  refs.backdrop.insertAdjacentHTML('beforeend', markup);
}

function onRemoveMarkupModal() {
  refs.backdrop.innerHTML = ` `;
}
