import { refs } from './refs';

refs.closeModalButton.addEventListener('click', onCloseModal);
refs.filmContainer.addEventListener('click', onOpenModal);

function onCloseModal() {
  refs.backdrop.classList.add('visually-hidden');
}

function onOpenModal(e) {
  const filmId = e.target.closest('div').hasAttribute('data');
  console.log(`📌  onOpenModal  filmId`, filmId);
  if (e.target === e.currentTarget) {
    return;
  }
  refs.backdrop.classList.remove('visually-hidden');
}
