import axios from 'axios';

export default class FetchFilms {
  constructor({ authKey, baseUrl, isNeedQuery }) {
    this.authKey = authKey;
    this.baseUrl = baseUrl;
    this.page = 1;
    this.searchQuery = '';
    this.isNeedQuery = isNeedQuery;
    this.searchParams = '';
  }

  resetPage() {
    this.page = 1;
  }

  incrementPage() {
    this.page += 1;
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  async fetchFilms() {
    if (!this.isNeedQuery) {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: this.page,
      });
    } else {
      this.searchParams = new URLSearchParams({
        api_key: this.authKey,
        page: this.page,
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
