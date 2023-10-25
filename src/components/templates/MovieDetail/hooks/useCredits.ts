import { useParams } from "react-router-dom";
import { MediaType } from "src/api/interfaces";
import { useQuery } from "@tanstack/react-query";
import getCredits from "src/api/services/getCredits";

function useCredits(id: string) {
  const { type } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-credits", id],
    queryFn: () => getCredits(type as MediaType, id),
  });

  return {
    error,
    isLoading,
    cast: data?.cast,
  };
}

export default useCredits;
