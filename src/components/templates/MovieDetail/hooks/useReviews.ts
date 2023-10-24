import { useParams } from "react-router-dom";
import { MediaType } from "src/api/interfaces";
import { useQuery } from "@tanstack/react-query";
import getReviews from "src/api/services/getReviews";

function useReviews(page: number, id: string) {
  const { type } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["movie-reviews", page, id],
    queryFn: () => getReviews(type as MediaType, page, id),
    keepPreviousData: true,
  });

  return {
    error,
    isLoading,
    reviews: data?.results,
  };
}

export default useReviews;
