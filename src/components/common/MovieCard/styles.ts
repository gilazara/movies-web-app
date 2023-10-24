import { Button, Typography, styled } from "@mui/material";

export const TrailerButton = styled(Button)(() => ({
  background: "#79AC78",
  "&:hover": {
    background: "#618264",
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
