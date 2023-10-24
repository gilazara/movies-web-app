import { useQuery } from "@tanstack/react-query";
import searchMovie from "src/api/services/searchMovie";

function useSearchMovies(query: string) {
  return useQuery(["search-movies", { query }], () => searchMovie(query), {
    keepPreviousData: true,
    staleTime: 5 * 60 * 1000,
    enabled: Boolean(query),
  });
}

export default useSearchMovies;
