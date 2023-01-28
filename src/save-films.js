// export default function saveToLocalStorage(arr, query = '', page = 1) {
//   films = {
//     results: arr,
//     query: query,
//     page: page,
//   };
//   localStorage.setItem('CURRENT', JSON.stringify(films));
// }

// export default function onCurrentSearchFilm() {
//   getFilmCard.then(response => {
//     localStorage.setItem('CURRENT_RESULT', JSON.stringify(response.results));
//   });
// }

// getFilmCard().then(resp => {
//   localStorage.setItem('CURRENT_RESULT', JSON.stringify(response.results));
// });
// function onCurrentSearchFilm(array) {
//   const saveSearchFilm = localStorage.getItem(CURRENT_RESULT);
//   const filmSearchData = JSON.parse(saveSearchFilm);
// }

///////////////////////////////////////////////////////////////////
// fetchFilmsByQuery.fetchFilms().then(resp => {
//   localStorage.setItem('CURRENT_RESULT', JSON.stringify(resp.results));
// });
// function onCurrentSearchFilm(array) {
//   const saveSearchFilm = localStorage.getItem(CURRENT_RESULT);
//   const filmSearchData = JSON.parse(saveSearchFilm);
// }

// async function onSearchMovie() {
//   try {
//     const response = await axios.get(
//       `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=${this.currentPage}&include_adult=false&query=${this.searchQuery}`
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//   }
// }
// function onSearchFilm() {
//   onSearchMovie.then(response => {
//     localStorage.setItem('SEARCH_RESULT_QUERY', JSON.stringify(response));
//   });
// }

//////////////////////31    onCurrentSearchFilm(res);//////////////////
