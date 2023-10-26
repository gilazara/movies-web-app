import { MediaType } from "@/api/interfaces";
import { useQuery } from "@tanstack/react-query";
import getMovieDetails from "src/api/services/getMovieDetails";

function useMovieDetails(type: MediaType, id: string) {
  const { data, isLoading, error, isError } = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => getMovieDetails(type, id),
  });

  return {
    error,
    isError,
    isLoading,
    details: data,
  };
}

export default useMovieDetails;
