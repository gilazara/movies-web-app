import { IReview } from "@/api/interfaces";
import { IMAGES_URL } from "src/utils/config";
import userIcon from "src/assets/images/user.jpg";
import { Avatar, Box, Typography, styled } from "@mui/material";

export const ReviewWrapper = styled(Box)(({ theme }) => ({
  gap: "16px",
  display: "flex",
  marginTop: "24px",
  padding: "16px 32px",
  borderRadius: "12px",
  background: theme.palette.secondary.light,
}));

interface Props {
  review: IReview;
}

const ReviewItem = ({ review }: Props) => {
  const { author_details, content } = review;
  const { avatar_path, name, username } = author_details;

  const avatar = avatar_path ? IMAGES_URL + avatar_path : userIcon;

  return (
    <ReviewWrapper>
      <Avatar alt="user-avatar" src={avatar} />
      <Box>
        <Typography variant="body1" fontWeight={600}>
          {name || username}
        </Typography>
        <Typography variant="caption">{content}</Typography>
      </Box>
    </ReviewWrapper>
  );
};

export default ReviewItem;
