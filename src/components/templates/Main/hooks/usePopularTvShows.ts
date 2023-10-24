import { useQuery } from "@tanstack/react-query";
import getPopularTvShows from "src/api/services/getPopularTvShows";

function usePopularTvShows() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-tv-shows"],
    queryFn: getPopularTvShows,
  });

  return {
    error,
    isLoading,
    popularShows: data?.results,
  };
}

export default usePopularTvShows;
