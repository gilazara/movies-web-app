import { useQuery } from "@tanstack/react-query";
import getPopularMovies from "src/api/services/getPopularMovies";

function usePopularMovies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["popular-movies"],
    queryFn: getPopularMovies,
  });

  return {
    error,
    isLoading,
    popularMovies: data?.results,
  };
}

export default usePopularMovies;
