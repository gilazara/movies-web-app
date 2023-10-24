import { IReview } from "@/api/interfaces";
import userIcon from "src/assets/images/user.jpg";
import { Avatar, Box, Typography } from "@mui/material";

interface Props {
  review: IReview;
}

const ReviewItem = ({ review }: Props) => {
  const { author_details, content } = review;
  const { avatar_path, name, username } = author_details;

  const avatar = avatar_path
    ? import.meta.env.VITE_APP_API_IMAGES_URL + avatar_path
    : userIcon;

  return (
    <Box display="flex" gap={2} paddingY={2}>
      <Avatar alt="user-avatar" src={avatar} />
      <Box>
        <Typography variant="body1" fontWeight={600}>
          {name || username}
        </Typography>
        <Typography variant="caption">{content}</Typography>
      </Box>
    </Box>
  );
};

export default ReviewItem;
