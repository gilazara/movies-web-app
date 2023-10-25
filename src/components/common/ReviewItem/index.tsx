import { IReview } from "@/api/interfaces";
import { IMAGES_URL } from "src/utils/config";
import userIcon from "src/assets/images/user.jpg";
import { Avatar, Box, Typography } from "@mui/material";

interface Props {
  review: IReview;
}

const ReviewItem = ({ review }: Props) => {
  const { author_details, content } = review;
  const { avatar_path, name, username } = author_details;

  const avatar = avatar_path ? IMAGES_URL + avatar_path : userIcon;

  return (
    <Box
      mt={3}
      py={2}
      px={4}
      sx={{
        gap: "16px",
        display: "flex",
        borderRadius: "12px",
        background: "#f7f5f1",
      }}
    >
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
