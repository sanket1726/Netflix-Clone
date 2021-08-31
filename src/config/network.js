import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;

// https://api.themoviedb.org/3/trending/movie/week?api_key=425d6d8ee728b9b4c3f38b70c1a77923
