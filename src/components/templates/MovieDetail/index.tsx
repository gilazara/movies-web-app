import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import useMovieDetails from "./hooks/useMovieDetails";
import Cast from "./Cast";
import { Grid } from "@mui/material";
import { MediaType } from "src/api/interfaces";
import DetailsCard from "./DetailsCard";
import Header from "src/components/UI/Header";
import useCredits from "./hooks/useCredits";
import SimilarMovies from "./SimilarMovies";
import useSimilarMovies from "./hooks/useSimilarMovies";
import { useParams, useSearchParams } from "react-router-dom";
import Loader from "src/components/UI/Loader";

const MovieDetails = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const { cast = [] } = useCredits(movieId!);
  const { similarMovies = [] } = useSimilarMovies(movieId!);
  const { isLoading, details } = useMovieDetails(type as MediaType, movieId!);

  return (
    <React.Fragment>
      <Header />
      <Grid
        container
        padding={12}
        minHeight="800px"
        justifyContent="space-between"
        sx={{ background: "#F5F4F2" }}
      >
        {isLoading ? (
          <Grid container alignItems="center" justifyContent="center">
            <Loader />
          </Grid>
        ) : (
          <React.Fragment>
            <Grid item xs={4} width="400px">
              <img
                alt="movie-poster"
                style={{ width: "400px", height: "100%" }}
                src={
                  import.meta.env.VITE_APP_API_IMAGES_URL + details?.poster_path
                }
              />
            </Grid>
            <Grid item lg={8} xs={7}>
              {details?.id && (
                <DetailsCard type={type as MediaType} details={details} />
              )}
            </Grid>
          </React.Fragment>
        )}
      </Grid>
      <Cast cast={cast} />
      <SimilarMovies similarMovies={similarMovies} />
    </React.Fragment>
  );
};

export default MovieDetails;
