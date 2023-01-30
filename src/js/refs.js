export { refs };

const refs = {
  IconCloseHref: document
    .querySelector('.button-close__img')
    .getAttribute('href'),
  backdrop: document.querySelector('.backdrop'),
  filmContainer: document.querySelector('.film__container'),
};
