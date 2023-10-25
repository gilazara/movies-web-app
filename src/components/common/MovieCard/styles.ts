import { Button, Typography, styled } from "@mui/material";

export const TrailerButton = styled(Button)(({ theme }) => ({
  background: theme.palette.green[400],
  "&:hover": {
    background: theme.palette.green[500],
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  height: "100px",
  display: "-webkit-box",
  webkitLineClamp: 2,
  webkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  color: theme.palette.text.secondary,
}));
