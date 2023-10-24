import Movie from "src/api/interfaces";
import instance from "src/api/instance";

interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const getPopularMovies = async () => {
  const { data } = await instance.get<PopularMoviesResponse>("movie/popular");

  return data;
};

export default getPopularMovies;
