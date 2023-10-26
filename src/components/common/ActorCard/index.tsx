import Card from "@mui/material/Card";
import palette from "src/theme/palette";
import { IMAGES_URL } from "src/utils/config";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import actorPoster from "src/assets/images/actor.jpg";

interface Props {
  src: string;
  name: string;
  ranking: number;
  character: string;
}

const ActorCard = ({ src, name, character, ranking }: Props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        border: `1px solid ${palette.secondary.main}`,
      }}
    >
      <CardActionArea>
        <CardMedia
          alt="actor"
          height="240"
          component="img"
          image={src ? IMAGES_URL + src : actorPoster}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Character: {character}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Imdb: {ranking.toFixed(1)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActorCard;
