import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IMAGES_URL } from "src/utils/config";
import MovieCard from "src/components/common/MovieCard";
import useGenres from "./hooks/useGenres";
import MainLayout from "src/components/UI/MainLayout";
import Slider from "src/components/UI/Slider";
import usePopularMovies from "./hooks/usePopularMovies";
import { SwiperSlide } from "swiper/react";
import SliderWrapper from "src/components/UI/SliderWrapper";
import Link from "src/components/common/Link";
import usePopularTvShows from "./hooks/usePopularTvShows";
import useTrendingMovies from "./hooks/useTrendingMovies";
import useToggle from "src/hooks/useToggle";
import PlayerModal from "src/components/UI/PlayerModal";

const MainPage = () => {
  const { genres = [] } = useGenres();
  const { trending = [] } = useTrendingMovies();
  const { popularShows = [] } = usePopularTvShows();
  const { popularMovies = [] } = usePopularMovies();
  const [videoModalShown, setVideoModalShown] = useToggle();

  return (
    <>
      <MainLayout genres={genres} />
      <SliderWrapper type="Popular Movies">
        <Slider>
          {popularMovies.map((movie) => {
            return (
              <SwiperSlide key={movie.id}>
                <Link to={`/movie?id=${movie.id}`}>
                  <MovieCard
                    title={movie.title}
                    imdb={movie.vote_average}
                    description={movie.overview}
                    onShowTrailer={setVideoModalShown}
                    src={IMAGES_URL + movie.poster_path}
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
              <SwiperSlide key={movie.id}>
                <Link to={`/tv?id=${movie.id}`}>
                  <MovieCard
                    title={movie.name}
                    imdb={movie.vote_average}
                    description={movie.overview}
                    onShowTrailer={setVideoModalShown}
                    src={IMAGES_URL + movie.poster_path}
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
              <SwiperSlide key={movie.id}>
                <Link to={`/${mediaType}?id=${movie.id}`}>
                  <MovieCard
                    title={movie.title}
                    imdb={movie.vote_average}
                    description={movie.overview}
                    onShowTrailer={setVideoModalShown}
                    src={IMAGES_URL + movie.poster_path}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Slider>
      </SliderWrapper>
      <PlayerModal
        open={videoModalShown}
        onClose={setVideoModalShown}
        src={"https://www.youtube.com/embed/uYPbbksJxIg?si=-BkqOcBZnV_pbadB"}
      />
    </>
  );
};

export default MainPage;
