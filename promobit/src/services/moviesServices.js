import axios from "axios";

const getPopularMovies = async () => {
  const apiKey = process.env.REACT_APP_KEY_API;
  const apiMovies = process.env.REACT_APP_MOVIES_API;

  try {
    const response = await axios.get(`${apiMovies}popular?api_key=${apiKey}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getPopularMovies;