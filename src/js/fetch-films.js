import axios from 'axios';

export default class FetchFilms {
  constructor() {
    this.authKey = '8378c884a6341b6bb6a7cfb362550079';
    this.baseUrl = 'https://api.themoviedb.org/3';
    this.currentPage = 1;
    this.searchQuery = '';
    this.lastQuery = '';
    this.searchParams = '';
  }

  //   resetPage() {
  //     this.currentPage = 1;
  //   }

  //   decrementPage() {
  //     this.currentPage -= 1;
  //   }

  //   incrementPage() {
  //     this.currentPage += 1;
  //   }

  //   get page() {
  //     return this.currentPage;
  //   }

  //   set page(newPage) {
  //     this.currentPage = newPage;
  //   }

  //   get query() {
  //     return this.searchQuery;
  //   }
  //   set query(newQuery) {
  //     this.lastQuery = this.searchQuery;
  //     this.searchQuery = newQuery;
  //   }

  async fetchFilms(query = '', page = 1) {
    let url = '';
    if (!query) {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: page,
      });
      url = `${this.baseUrl}/trending/movie/week?${this.searchParams}`;
    } else {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: page,
        query: query,
      });
      url = `${this.baseUrl}/search/movie?${this.searchParams}`;
    }
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {}
  }
}
