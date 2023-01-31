import { onAddToWathed } from './add-to-localstorage-btn';
import getFilmCard from './get-film-card';
import { createMarkup } from '../markup/markupfilmcard';
console.log(onAddToWathed);

// getFilmCard().then(resp => {
//   createMarkup(resp.results);
//   observer.observe(guard);
//   //   pagination(resp.page, resp.total_pages);
// });

// const guard = document.querySelector('.js-guard');

// const options = {
//   root: null,
//   rootMargin: '300px',
//   threshold: 1.0,
// };
// const observer = new IntersectionObserver(onInfinityLoad, options);

// let page = 1;
// let pages = 20;

// function onInfinityLoad(entries, observer) {
//   console.log(entries);
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       page += 1;
//       addFilmToStorage('queue', film);
//       if (page === pages) {
//         observer.unobserve(guard);
//       }
//     }
//   });
// }
