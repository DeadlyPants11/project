import { createMarkup } from '../markup/markupfilmcard';

const localRefs = {
  btnWatched: document.querySelector('.btn__watched'),
  btnQueue: document.querySelector('.btn__queue'),
  libraryContainer: document.querySelector('.library__container'),
};

const PER_PAGE = 20;
let currentPage = 1;

// задати активну кнопку
localRefs.btnWatched.classList.add('activeBtn');
createMarkup(loadFilms('watched', currentPage));

// додати слухачі
localRefs.btnWatched.addEventListener('click', onBtnWatchedClick);
localRefs.btnQueue.addEventListener('click', onBtnQueueClick);

function onBtnWatchedClick() {
  localRefs.btnWatched.classList.add('activeBtn');
  localRefs.btnQueue.classList.remove('activeBtn');
  createMarkup(loadFilms('watched', currentPage));
  observer.observe(guard);
}

function onBtnQueueClick() {
  localRefs.btnQueue.classList.add('activeBtn');
  localRefs.btnWatched.classList.remove('activeBtn');
  createMarkup(loadFilms('queue', currentPage));
  observer.observe(guard);
}

function loadFilms(key, p) {
  try {
    const getLoadedFilms = localStorage.getItem(key);
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    const page = parseLoadedFilms.slice(
      (p - currentPage) * PER_PAGE,
      (p - currentPage) * PER_PAGE + PER_PAGE
    );
    return page;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export function refreshPage() {
  localRefs.libraryContainer.innerHTML = '';
  if (localRefs.btnQueue.classList.contains('activeBtn')) {
    createMarkup(loadFilms('queue', currentPage));
  } else {
    createMarkup(loadFilms('watched', currentPage));
  }
}

// Завантаити фільми
// currentPage. створити функцію, що примає "сторінку" і робить слайс з масиву
// currentPage. дадати зміну класу по слухачам

const guard = document.querySelector('.js-guard');

const options = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0,
};
const observer = new IntersectionObserver(onInfinityLoad, options);

// let page = 1;
// let pages = 20;

function onInfinityLoad(entries, observer) {
  console.log(entries);
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      page += 1;
      addFilmToStorage('queue', film);
      //   if (page === pages) {
      //     observer.unobserve(guard);
      //   }
    }
  });
}
