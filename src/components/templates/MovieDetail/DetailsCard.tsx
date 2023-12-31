import { PlayerButton } from "./styles";
import { MediaType } from "src/api/interfaces";
import { Grid, Typography } from "@mui/material";
import { MovieDetails } from "src/api/services/getMovieDetails";

interface Props {
  type: MediaType;
  details: MovieDetails;
}

const DetailsCard = ({ type, details }: Props) => (
  <Grid
    gap={2}
    padding={3}
    display="flex"
    flexDirection="column"
    sx={{ background: "#fff" }}
  >
    <Typography variant="h4">
      {type === "tv" ? details.name : details.title}
    </Typography>
    <Typography variant="body1" maxWidth={900}>
      <strong>Description:</strong> {details.overview}
    </Typography>
    <Typography variant="body1">
      <strong>Avg. Vote:</strong> {details.vote_average}
    </Typography>
    <Typography variant="body1">
      <strong>Vote count:</strong> {details.vote_count}
    </Typography>
    <Typography variant="body1">
      <strong>Status:</strong> {details.status}
    </Typography>
    <Typography variant="body1">
      <strong>Release date:</strong> {details.release_date}
    </Typography>
    <Typography variant="body1">
      <strong>Tagline:</strong> {details.tagline}
    </Typography>
    <Grid display="flex" justifyContent="flex-end" pr={8}>
      <PlayerButton variant="text">Play Video</PlayerButton>
    </Grid>
  </Grid>
);

export default DetailsCard;
