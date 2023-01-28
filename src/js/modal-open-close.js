import { refs } from './refs';

refs.closeModalButton.addEventListener('click', onCloseModal);
refs.filmContainer.addEventListener('click', onOpenModal);

function onCloseModal() {
  refs.backdrop.classList.add('visually-hidden');
}

function onOpenModal(e) {
  if (e.target === e.currentTarget) {
    return;
  }
  refs.backdrop.classList.remove('visually-hidden');
}
