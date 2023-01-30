export {
  preloaderHide,
  onLoaderClassRemove,
  onLoaderClassAdd,
  loaderEl,
  preloaderWrapperEl,
};

const loaderEl = document.querySelector('.loader');
const preloaderWrapperEl = document.querySelector('.preloader-wrapper');

window.addEventListener('load', preloaderHide);

function preloaderHide() {
  preloaderWrapperEl.classList.add('visually-hidden');
  setTimeout(() => {
    preloaderWrapperEl.style.display = 'none';
  }, 400);
}

function onLoaderClassRemove() {
  loaderEl.classList.remove('visually-hidden');
}

function onLoaderClassAdd() {
  loaderEl.classList.add('visually-hidden');
}
