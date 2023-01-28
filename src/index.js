
// import axios from 'axios';
import './loader';


// import './js/pagination';
import './js/on-search.js';
import { createMarkup } from './markup/markupfilmcard';
import getFilmCard from './js/get-film-card';


getFilmCard().then(resp => {
  createMarkup(resp.results);
});

// const filmComtainer = document.querySelector('.film__container');

// const KEY = '8378c884a6341b6bb6a7cfb362550079';
// const BASE_URL = 'https://api.themoviedb.org/3';

// async function getFilmCard(content, page = 1) {
//   try {
//     const responce = await axios.get(
//       `${BASE_URL}/trending/movie/week?api_key=${KEY}`
//     );
//     const film = responce.data.results;
//     return film;
//   } catch (error) {
//     return error.message;
//   }
// }

// async function getGenres(params) {
//   const respons = await axios.get(
//     `${BASE_URL}/genre/movie/list?api_key=${KEY}`
//   );
//   const genres = respons.data.genres;
//   return genres;
// }

// async function searchFilm(params, page = 1) {
//   const respons = await axios.get(`${BASE_URL}/search/movie?api_key=${KEY}`);
//   const allFilm = respons;
//   console.log(allFilm);
//   return allFilm;
// }


// function createMarkup(resp) {
//   const filmCard = resp
//     .map(({ poster_path, title, genre_ids, vote_average }) => {
//       return `<div class="film__wrap">
//   <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${title}" />
//   <ul>
//     <li class="film__item">${title}</li>
//     <li class="film__item">${genre_ids} | ${vote_average}</li>
//   </ul>
// </div>`;
//     })
//     .join('');

//   filmComtainer.insertAdjacentHTML('beforeend', filmCard);
// }
