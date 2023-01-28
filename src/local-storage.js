import axios from 'axios';

// export default class FetchFilms {
//   constructor() {
//     this.authKey = '8378c884a6341b6bb6a7cfb362550079';
//     this.baseUrl = 'https://api.themoviedb.org/3';
//     this.currentPage = 1;
//     this.searchQuery = '';
//     this.lastQuery = '';
//     this.searchParams = '';
//   }

//   async fetchFilms(query = '', page = 1) {
//     let url = '';
//     if (!query) {
//       this.searchParams = new URLSearchParams({
//         api_key: this.authKey,
//         page: page,
//       });
//       url = `${this.baseUrl}/trending/movie/week?${this.searchParams}`;
//     } else {
//       this.searchParams = new URLSearchParams({
//         api_key: this.authKey,
//         page: page,
//         query: query,
//       });
//       url = `${this.baseUrl}/search/movie?${this.searchParams}`;
//     }
//     try {
//       const response = await axios.get(url);
//       return response.data;
//     } catch (error) {}
//   }
// }

async function onSearchMovie() {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${this.currentPage}&include_adult=false&query=${this.searchQuery}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
function onSearchFilm() {
  onSearchMovie.then(response => {
    localStorage.setItem('SEARCH_RESULT_QUERY', JSON.stringify(response));
  });
}

export default function onTrendingSearchFilm() {
  getFilmCard.then(response => {
    localStorage.setItem('TREDING_RESULT', JSON.stringify(response));
  });
}

// function onGenresSearchFilm() {
//   getGenresArray().then(resp => {
//     localStorage.setItem(GENRES_NAME, JSON.stringify(resp));
//   });
// }
