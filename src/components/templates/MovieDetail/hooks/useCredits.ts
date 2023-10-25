import { useQuery } from "@tanstack/react-query";
import getCredits from "src/api/services/getCredits";

function useCredits(id: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-credits", id],
    queryFn: () => getCredits(id),
  });

  return {
    error,
    isLoading,
    cast: data?.cast,
  };
}

export default useCredits;
