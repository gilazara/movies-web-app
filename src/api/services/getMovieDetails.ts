import instance from "src/api/instance";
import { MediaType } from "../interfaces";

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  genres: { id: number; name: string }[];
  vote_count: number;
  release_date: string;
  revenue: number;
  runtime: number;
  name: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  tagline: string;
}

const getMovieDetails = async (type: MediaType, movieId: string) => {
  const { data } = await instance.get<MovieDetails>(`${type}/${movieId}`);

  return data;
};

export default getMovieDetails;
