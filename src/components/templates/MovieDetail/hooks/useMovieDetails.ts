import { MediaType } from "@/api/interfaces";
import { useQuery } from "@tanstack/react-query";
import getMovieDetails from "src/api/services/getMovieDetails";

function useMovieDetails(type: MediaType, id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-details"],
    queryFn: () => getMovieDetails(type, id),
  });

  return {
    error,
    isLoading,
    details: data,
  };
}

export default useMovieDetails;
