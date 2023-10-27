export default interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  media_type: MediaType;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export default interface TvShow {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface IActor {
  id: number;
  cast_id: number;
  character: string;
  gender: 1 | 2;
  name: string;
  popularity: number;
  profile_path: string;
}

export interface IAuthor {
  avatar_path: string;
  name: string;
  rating: number;
  username: string;
}

export interface IReview {
  author: string;
  author_details: IAuthor;
  content: string;
  created_at: string;
  id: string;
  url: string;
}

export type MediaType = "tv" | "movie";
