import { useState } from "react";
import Link from "src/components/common/Link";
import useDebounce from "src/hooks/useDebounce";
import { MoviePoster, SearchButton, SearchResults } from "./styles";
import movieIcon from "src/assets/images/movieIcon.png";
import { Box, TextField, Typography } from "@mui/material";
import useSearchMovies from "src/components/templates/Main/hooks/useSearchMovies";
import { IMAGES_URL } from "src/utils/config";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedValue = useDebounce(searchValue, 400);

  const { data, isFetching } = useSearchMovies(debouncedValue);
  const movies = data?.results || [];

  return (
    <Box mt={4} position="relative">
      <TextField
        size="medium"
        variant="outlined"
        value={searchValue}
        placeholder="Search movies and tv series"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchButton>Search</SearchButton>
      {searchValue && (
        <SearchResults>
          {isFetching && <Typography variant="body2">Loading...</Typography>}
          {!isFetching && movies.length === 0 && (
            <Typography variant="body2">Movies not found</Typography>
          )}
          {!isFetching &&
            movies.map((movie) => {
              return (
                <Link to={`/${movie.media_type}?id=${movie.id}`}>
                  <Box display="flex" gap={1} alignItems="center">
                    <MoviePoster
                      src={
                        movie.poster_path
                          ? IMAGES_URL + movie.poster_path
                          : movieIcon
                      }
                    />
                    <Typography variant="body2" textTransform="capitalize">
                      {movie.title || movie.name}
                    </Typography>
                  </Box>
                </Link>
              );
            })}
        </SearchResults>
      )}
    </Box>
  );
};

export default Search;
