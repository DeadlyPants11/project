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
