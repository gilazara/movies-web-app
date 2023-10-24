import { MediaType } from "@/api/interfaces";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getSimilarMovie from "src/api/services/getSimilarMovies";

function useSimilarMovies(id: string) {
  const { type } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["similar-movies"],
    queryFn: () => getSimilarMovie(type as MediaType, id),
  });

  return {
    error,
    isLoading,
    similarMovies: data?.results,
  };
}

export default useSimilarMovies;
