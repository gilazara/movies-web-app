import MovieCard from "src/components/common/MovieCard";
import useGenres from "./hooks/useGenres";
import MainLayout from "src/components/UI/MainLayout";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Slider from "src/components/UI/Slider";
import usePopularMovies from "./hooks/usePopularMovies";
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "src/components/UI/SliderWrapper";
import Link from "src/components/common/Link";
import usePopularTvShows from "./hooks/usePopularTvShows";
import useTrendingMovies from "./hooks/useTrendingMovies";

const MainPage = () => {
  const { genres = [] } = useGenres();
  const { trending = [] } = useTrendingMovies();
  const { popularShows = [] } = usePopularTvShows();
  const { popularMovies = [] } = usePopularMovies();

  return (
    <>
      <MainLayout genres={genres} />
      <SliderWrapper type="Popular Movies">
        <Slider>
          {popularMovies.map((movie) => {
            return (
              <SwiperSlide>
                <Link to={`/movie?id=${movie.id}`}>
                  <MovieCard
                    title={movie.title}
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
      <SliderWrapper type="Popular TV Shows">
        <Slider>
          {popularShows.map((movie) => {
            return (
              <SwiperSlide>
                <Link to={`/tv?id=${movie.id}`}>
                  <MovieCard
                    title={movie.name}
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
      <SliderWrapper type="Trending">
        <Slider>
          {trending.map((movie) => {
            const mediaType = movie.media_type === "tv" ? "tv" : "movie";

            return (
              <SwiperSlide>
                <Link to={`/${mediaType}?id=${movie.id}`}>
                  <MovieCard
                    title={movie.title}
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
    </>
  );
};

export default MainPage;
