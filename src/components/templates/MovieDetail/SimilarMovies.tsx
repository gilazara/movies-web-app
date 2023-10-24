import Slider from "src/components/UI/Slider";
import { SwiperSlide } from "swiper/react";
import Link from "src/components/common/Link";
import MovieCard from "src/components/common/MovieCard";
import { Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import Movie from "src/api/interfaces";
import SliderWrapper from "src/components/UI/SliderWrapper";

const SimilarMovies = ({ similarMovies }: { similarMovies: Movie[] }) => {
  const { type } = useParams();

  return (
    <Grid>
      {similarMovies.length > 0 && (
        <Grid mb={8}>
          <SliderWrapper type="Similar Movies">
            <Slider>
              {similarMovies.map((movie: Movie) => {
                return (
                  <SwiperSlide key={movie.id}>
                    <Link to={`/${type}?id=${movie.id}`}>
                      <MovieCard
                        src={movie.poster_path}
                        showTrailerButton={false}
                        imdb={movie.vote_average}
                        description={movie.overview}
                        title={movie.title || movie.name}
                      />
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Slider>
          </SliderWrapper>
        </Grid>
      )}
    </Grid>
  );
};

export default SimilarMovies;
