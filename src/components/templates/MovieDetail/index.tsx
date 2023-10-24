import { useParams, useSearchParams } from "react-router-dom";
import useMovieDetails from "./hooks/useMovieDetails";
import { Grid } from "@mui/material";
import { MediaType } from "@/api/interfaces";
import DetailsCard from "./DetailsCard";
import useSimilarMovies from "./hooks/useSimilarMovies";

const MovieDetails = () => {
  const { type } = useParams();
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("id");
  const { details } = useMovieDetails(type as MediaType, movieId!);
  const { similarMovies } = useSimilarMovies(movieId!);

  return (
    <Grid container sx={{ background: "#F5F4F2" }} py={10} px={20}>
      <Grid item xs={4}>
        <img
          src={import.meta.env.VITE_APP_API_IMAGES_URL + details?.poster_path}
          style={{ width: "400px", height: "600px" }}
        />
      </Grid>
      {details?.id && (
        <DetailsCard type={type as MediaType} details={details} />
      )}
    </Grid>
  );
};

export default MovieDetails;
