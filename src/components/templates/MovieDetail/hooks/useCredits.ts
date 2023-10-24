import { useQuery } from "@tanstack/react-query";
import getCredits from "@/api/services/getCredits";

function useCredits(id: number) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-credits"],
    queryFn: () => getCredits(id),
  });

  return {
    error,
    isLoading,
    cast: data?.cast,
    crew: data?.crew,
  };
}

export default useCredits;
