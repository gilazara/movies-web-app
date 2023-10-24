import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

interface MovieCardProps {
  src: string;
  title: string;
  description: string;
}

const MovieCard = ({ title, description, src }: MovieCardProps) => {
  return (
    <Card sx={{ maxWidth: 345, maxHeight: 400 }}>
      <CardMedia component="img" alt="movie-poster" height="140" image={src} />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Play</Button>
      </CardActions>
    </Card>
  );
};

export default MovieCard;
