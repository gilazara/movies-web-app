import { useQuery } from "@tanstack/react-query";
import getTrendingMovies from "src/api/services/getTrendingMovies";

function useTrendingMovies() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["trending-movies"],
    queryFn: getTrendingMovies,
  });

  return {
    error,
    isLoading,
    trending: data?.results,
  };
}

export default useTrendingMovies;
