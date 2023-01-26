import axios from 'axios';

export default class FetchFilms {
  constructor({ authKey, baseUrl, isNeedQuery }) {
    this.authKey = authKey;
    this.baseUrl = baseUrl;
    this.currentPage = 1;
    this.searchQuery = '';
    this.lastQuery = '';
    this.isNeedQuery = isNeedQuery;
    this.searchParams = '';
  }

  resetPage() {
    this.currentPage = 1;
  }

  dicrementPage() {
    this.currentPage -= 1;
  }

  incrementPage() {
    this.currentPage += 1;
  }

  get page() {
    return this.currentPage;
  }

  set page(newPage) {
    this.currentPage = newPage;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.lastQuery = this.searchQuery;
    this.searchQuery = newQuery;
  }

  async fetchFilms() {
    if (!this.isNeedQuery) {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: this.currentPage,
      });
    } else {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: this.currentPage,
        query: this.searchQuery,
      });
    }
    const url = `${this.baseUrl}?${this.searchParams}`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {}
  }
}
