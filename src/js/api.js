import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '6ab9b39d97ad84b66bbf0073e6af1a4c';

export async function fetchTrendingMovies() {
  const resp = await axios.get(
    `${BASE_URL}/trending/movie/day?language=en-US&api_key=${API_KEY}`
  );
  return resp.data.results;
}
