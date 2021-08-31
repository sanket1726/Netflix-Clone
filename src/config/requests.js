const API_KEY = "425d6d8ee728b9b4c3f38b70c1a77923";
// const BASE_URL = "https://api.themoviedb.org/3";

const language = {
  en_US: "en-US",
};

const requests = {
  fetchTrendingMovies: `/trending/movie/week?api_key=${API_KEY}`,
  fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=${language.en_US}&page=1`,
  fetchLatestMovies: `/movie/latest?api_key=${API_KEY}&language=${language.en_US}`,
  fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=${language.en_US}&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=${language.en_US}&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_netoworks=213`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

// export default requests;
module.exports = {
  requests: requests,
  API_KEY: API_KEY,
};
