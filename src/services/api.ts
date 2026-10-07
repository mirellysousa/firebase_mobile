import axios from "axios";

const movies = axios.create({
  baseURL: "https://6414e8c38dade07073cb2a6a.mockapi.io/api/v1/movies",
});

export { movies };
