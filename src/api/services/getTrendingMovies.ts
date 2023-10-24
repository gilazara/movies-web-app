import instance from "src/api/instance";
import TvShow from "src/api/interfaces";

interface TrendingMoviesResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}

const getTrendingMovies = async () => {
  const { data } = await instance.get<TrendingMoviesResponse>(
    "/trending/movie/week"
  );

  return data;
};

export default getTrendingMovies;
