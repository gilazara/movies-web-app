import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { IMAGES_URL } from "src/utils/config";

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
        border: "1px solid #F8F0E5",
      }}
    >
      <CardActionArea>
        <CardMedia
          alt="actor"
          height="240"
          component="img"
          image={IMAGES_URL + src}
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
