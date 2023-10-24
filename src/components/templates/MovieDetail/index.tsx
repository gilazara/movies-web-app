import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useParams, useSearchParams } from "react-router-dom";
import useMovieDetails from "./hooks/useMovieDetails";
import { Grid } from "@mui/material";
import { MediaType } from "src/api/interfaces";
import DetailsCard from "./DetailsCard";
import useSimilarMovies from "./hooks/useSimilarMovies";
import SliderWrapper from "src/components/UI/SliderWrapper";
import Slider from "src/components/UI/Slider";
import { SwiperSlide } from "swiper/react";
import Link from "src/components/common/Link";
import MovieCard from "src/components/common/MovieCard";
import Header from "src/components/UI/Header";
import { useEffect } from "react";

const MovieDetails = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const { details } = useMovieDetails(type as MediaType, movieId!);
  const { similarMovies = [] } = useSimilarMovies(movieId!);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [movieId]);

  return (
    <>
      <Header />
      <Grid
        py={10}
        px={12}
        container
        justifyContent="space-between"
        minHeight="800px"
        sx={{ background: "#F5F4F2" }}
      >
        <Grid item xs={4}>
          <img
            alt="movie-poster"
            style={{ width: "450px", height: "100%" }}
            src={import.meta.env.VITE_APP_API_IMAGES_URL + details?.poster_path}
          />
        </Grid>
        <Grid item xs={8}>
          {details?.id && (
            <DetailsCard type={type as MediaType} details={details} />
          )}
        </Grid>
      </Grid>
      {similarMovies.length > 0 && (
        <Grid mb={8}>
          <SliderWrapper type="Similar Movies">
            <Slider>
              {similarMovies.map((movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <Link to={`/${type}?id=${movie.id}`}>
                      <MovieCard
                        title={movie.title}
                        onShowTrailer={() => {
                          ////
                        }}
                        imdb={movie.vote_average}
                        src={
                          import.meta.env.VITE_APP_API_IMAGES_URL +
                          movie.poster_path
                        }
                        description={movie.overview}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Slider>
          </SliderWrapper>
        </Grid>
      )}
    </>
  );
};

export default MovieDetails;
