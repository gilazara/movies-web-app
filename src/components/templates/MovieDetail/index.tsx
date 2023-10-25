import React, { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Cast from "./Cast";
import Reviews from "./Reviews";
import { Grid } from "@mui/material";
import DetailsCard from "./DetailsCard";
import { DetailsWrapper } from "./styles";
import useCredits from "./hooks/useCredits";
import SimilarMovies from "./SimilarMovies";
import Loader from "src/components/UI/Loader";
import Header from "src/components/UI/Header";
import { IMAGES_URL } from "src/utils/config";
import { MediaType } from "src/api/interfaces";
import useMovieDetails from "./hooks/useMovieDetails";
import useSimilarMovies from "./hooks/useSimilarMovies";
import moviePoster from "src/assets/images/moviePoster.jpg";
import { useParams, useSearchParams } from "react-router-dom";

const MovieDetails = () => {
  const { type } = useParams();

  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id")!;

  const { cast = [] } = useCredits(movieId);
  const { similarMovies = [] } = useSimilarMovies(movieId);
  const { isLoading, details } = useMovieDetails(type as MediaType, movieId);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [movieId]);

  return (
    <React.Fragment>
      <Header />
      <DetailsWrapper container>
        {isLoading ? (
          <Grid container alignItems="center" justifyContent="center">
            <Loader />
          </Grid>
        ) : (
          <Grid container justifyContent="space-between" columnSpacing={10}>
            <Grid item sm={5} lg={4}>
              <img
                alt="movie-poster"
                src={
                  details?.poster_path
                    ? IMAGES_URL + details?.poster_path
                    : moviePoster
                }
                style={{ width: "100%", height: "100%" }}
              />
            </Grid>
            <Grid item sm={7} lg={8}>
              {details?.id && (
                <DetailsCard type={type as MediaType} details={details} />
              )}
            </Grid>
          </Grid>
        )}
      </DetailsWrapper>
      <Cast cast={cast} />
      <SimilarMovies similarMovies={similarMovies} />
      <Reviews movieId={movieId} />
    </React.Fragment>
  );
};

export default MovieDetails;
