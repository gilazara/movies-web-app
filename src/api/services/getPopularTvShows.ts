import TvShow from "src/api/interfaces";
import instance from "src/api/instance";

interface PopularTvShowsResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}

const getPopularTvShows = async () => {
  const { data } = await instance.get<PopularTvShowsResponse>("tv/popular");

  return data;
};

export default getPopularTvShows;
