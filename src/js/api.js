import axios from 'axios';
export { onGetFilmDataByID };

const KEY = '8378c884a6341b6bb6a7cfb362550079';
const BASE_URL = 'https://api.themoviedb.org/3';

async function onGetFilmDataByID(id) {
  try {
    const response = await axios.get(`${BASE_URL}/movie/${id}?api_key=${KEY}`);
    if (!response.status) {
      throw new Error('This movie is not available');
    }
    return response;
  } catch (error) {
    console.log(error);
  }
}
