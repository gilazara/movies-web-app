import { MediaType } from "@/api/interfaces";
import Movie from "src/api/interfaces";
import instance from "src/api/instance";

interface SimilarMovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const getSimilarMovies = async (type: MediaType, movieId: string) => {
  const { data } = await instance.get<SimilarMovieResponse>(
    `${type}/${movieId}/similar`
  );

  return data;
};

export default getSimilarMovies;
