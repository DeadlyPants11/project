import { createMarkup, filmContainer } from '../markup/markupfilmcard';

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
  filmContainer.innerHTML = '';
  currentPage = 1;
  createMarkup(loadFilms('watched', currentPage));
  observer.observe(document.querySelector('.film-list__item:last-child'));
}

function onBtnQueueClick() {
  localRefs.btnQueue.classList.add('activeBtn');
  localRefs.btnWatched.classList.remove('activeBtn');
  filmContainer.innerHTML = '';
  currentPage = 1;
  createMarkup(loadFilms('queue', currentPage));
  observer.observe(document.querySelector('.film-list__item:last-child'));
}

function loadFilms(key, currentPage) {
  console.log('load');
  try {
    const getLoadedFilms = localStorage.getItem(key);
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    console.log(!parseLoadedFilms);
    if (!parseLoadedFilms || parseLoadedFilms.length == 0) {
      localRefs.libraryContainer.innerHTML = `<h2 style='margin: auto'>No films found!</h2>`;
      return [];
    }
    // const page = parseLoadedFilms.slice(
    //   (p - currentPage) * PER_PAGE,
    //   (p - currentPage) * PER_PAGE + PER_PAGE
    // );
    const page = parseLoadedFilms.slice(
      (currentPage - 1) * PER_PAGE,
      (currentPage - 1) * PER_PAGE + PER_PAGE
    );
    return page;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

export function refreshPage() {
  localRefs.libraryContainer.innerHTML = '';
  if (localRefs.btnQueue.classList.contains('activeBtn')) {
    createMarkup(loadFilms('queue', 1));
  } else {
    createMarkup(loadFilms('watched', 1));
  }
}

// Завантаити фільми
// currentPage. створити функцію, що примає "сторінку" і робить слайс з масиву
// currentPage. дадати зміну класу по слухачам

// //Інтерсекшн обзервер та скрол

function onObserve(currentPage, key) {
  createMarkup(loadFilms(key, currentPage));
  observer.observe(document.querySelector('.film-list__item:last-child'));
}

let options = {
  threshold: 0.5,
};

const lastFilmListItem = document.querySelector('.film-list__item:last-child');

function onScroll(entries, observer) {
  let key = '';
  if (localRefs.btnWatched.classList.contains('activeBtn')) {
    key = 'watched';
  } else {
    key = 'queue';
  }
  const data = localStorage.getItem(key);
  const parsedData = JSON.parse(data);

  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;

      // if (currentPage * PER_PAGE > parsedData.length) {
      //   observer.unobserve(entry.target);
      //   return;
      // }
      onObserve(currentPage, key);
    }
  });
}

let observer = new IntersectionObserver(onScroll, options);

if (lastFilmListItem) {
  observer.observe(lastFilmListItem);
}
