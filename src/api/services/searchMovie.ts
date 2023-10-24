import Movie from "../interfaces";
import instance from "src/api/instance";

interface FoundMoviesResponse {
  results: Movie[];
}

const searchMovie = async (query: string) => {
  const { data } = await instance.get<FoundMoviesResponse>(
    `search/multi?query=${query}`
  );

  return data;
};

export default searchMovie;
