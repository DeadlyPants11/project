import { refs } from './refs';

const library = {
  watched: [],
  queue: [],
};

let localRefs = {};
let filmId = null;

//Перевірити наявність змінних в сховищи, якщо нема створити
function checkLocalStorage() {
  if (!localStorage.getItem('watched')) {
    localStorage.setItem('watched', JSON.stringify(library.watched));
  }
  if (!localStorage.getItem('queue')) {
    localStorage.setItem('queue', JSON.stringify(library.queue));
  }
}

checkLocalStorage();

// Референси на модалку та кнопки

export function addRefsAndListeners() {
  localRefs = {
  modal: refs.backdrop.getElementsByClassName('modal')[0],
  addToWatched:  refs.backdrop.getElementsByClassName('btn-add-to-watched')[0],
  addToQueue:  refs.backdrop.getElementsByClassName('btn-add-to-queue')[0],
  };

// Слухачи подій на кнопки
localRefs.addToWatched.addEventListener('click', onAddToWathed);
  localRefs.addToQueue.addEventListener('click', onAddToQueue);
  // по кліку на кнопку витянути дататрибут з поточної модалки
  filmId = localRefs.modal.dataset.id;
  if (isFilmExist(filmId, 'queue')) {
    localRefs.addToQueue.textContent = "Remove from Queue";
    localRefs.addToQueue.classList.add('added');
  }
  if (isFilmExist(filmId, 'watched')) {
    localRefs.addToWatched.textContent = "Remove from Watched";
    localRefs.addToWatched.classList.add('added');
  }
}

function isFilmExist(id, key) {
  const getLoadedFilms = localStorage.getItem(key);
  const parseLoadedFilms = JSON.parse(getLoadedFilms);
 return  parseLoadedFilms.find(obj => obj.id == id);
}

export function delListeners() {
  localRefs.addToWatched.removeEventListener('click', onAddToWathed);
  localRefs.addToQueue.removeEventListener('click', onAddToQueue);
}

function onAddToWathed() {
  const film = getFilm(filmId); 
  localRefs.addToWatched.classList.toggle('added');
  if (localRefs.addToWatched.classList.contains("added")) {
    addFilmToStorage('watched', film);
    localRefs.addToWatched.textContent = "Remove from Watched";
  } else {
    delFilmFromStorage('watched', filmId);
    localRefs.addToWatched.textContent = "Add to Watched";
  }
}

function onAddToQueue() {
  const film = getFilm(filmId); 
  localRefs.addToQueue.classList.toggle('added');
  if (localRefs.addToQueue.classList.contains("added")) {
    addFilmToStorage('queue', film);
    localRefs.addToQueue.textContent = "Remove from Queue";
  } else {
    delFilmFromStorage('queue', filmId);
    localRefs.addToQueue.textContent = "Add to Queue";
  }
}

// Завантажити фільм з таким же айді з лкального сховища Load-from-storag

function getFilm(id) {
  const films = loadFilms();
  return films.find(obj => obj.id == id);
}

function loadFilms() {
  try {
    const getLoadedFilms = localStorage.getItem('CURRENT_FILMS');
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    const films = parseLoadedFilms.results.results;
    return films;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
// Додати новий елемент в локальне сховище

function addFilmToStorage(key, film) {
  try {
    const getLoadedFilms = localStorage.getItem(key);
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    parseLoadedFilms.push(film);
    localStorage.setItem(key, JSON.stringify(parseLoadedFilms))
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

// Видалити фільм
function delFilmFromStorage(key, id) {
  try {
    const getLoadedFilms = localStorage.getItem(key);
    const parseLoadedFilms = JSON.parse(getLoadedFilms);
    const newFilms = parseLoadedFilms.filter(obj => obj.id != id)
    localStorage.setItem(key, JSON.stringify(newFilms))
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}
