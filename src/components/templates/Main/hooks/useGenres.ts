import { useQuery } from "@tanstack/react-query";
import getGenres from "src/api/services/getGenres";

function useGenres() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["genres"],
    queryFn: getGenres,
    staleTime: 1000,
  });

  return {
    error,
    isLoading,
    genres: data?.genres,
  };
}

export default useGenres;
