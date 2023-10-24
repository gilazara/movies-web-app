import instance from "src/api/instance";

export interface GenresResponse {
  genres: { id: number; name: string }[];
}

const getGenres = async () => {
  const { data } = await instance.get<GenresResponse>("genre/movie/list");

  return data;
};

export default getGenres;
