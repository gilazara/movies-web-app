import Card from "@mui/material/Card";
import { IMAGES_URL } from "src/utils/config";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Description, TrailerButton } from "./styles";

interface MovieCardProps {
  src: string;
  title: string;
  imdb: number;
  description: string;
  onShowTrailer?: () => void;
  showTrailerButton?: boolean;
}

const MovieCard = ({
  title,
  description,
  src,
  imdb,
  onShowTrailer,
  showTrailerButton = true,
}: MovieCardProps) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        border: "1px solid #F8F0E5",
      }}
    >
      <CardMedia
        component="img"
        alt="movie-poster"
        height="340"
        image={IMAGES_URL + src}
      />
      <CardContent>
        <Typography
          mb={1}
          variant="body1"
          sx={{ height: "20px", overflow: "hidden" }}
        >
          {title}
        </Typography>
        <Description variant="body2">{description}</Description>
      </CardContent>
      <CardActions
        sx={{ padding: 2, display: "flex", justifyContent: "space-between" }}
      >
        <Typography color="text.primary">IMDB: {imdb.toFixed(1)}</Typography>
        {showTrailerButton && (
          <TrailerButton
            variant="outlined"
            onClick={(e) => {
              e.preventDefault();
              onShowTrailer && onShowTrailer();
            }}
          >
            Trailer
          </TrailerButton>
        )}
      </CardActions>
    </Card>
  );
};

export default MovieCard;
