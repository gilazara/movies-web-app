import palette from "src/theme/palette";
import { Button, Box, styled } from "@mui/material";

export const SearchButton = styled(Button)(() => ({
  position: "absolute",
  top: "50%",
  right: "16px",
  transform: "translateY(-50%)",
  background: palette.tomato,
  color: "#fff",
  padding: "8px 30px",
  borderRadius: "10px",
  ":hover": {
    background: palette.tomato,
  },
}));

export const SearchResults = styled(Box)(({ theme }) => ({
  position: "absolute",
  background: theme.palette.primary.main,
  padding: "18px 12px",
  marginTop: "3px",
  width: "100%",
  zIndex: 10,
  display: "flex",
  overflowY: "scroll",
  maxHeight: "300px",
  flexDirection: "column",
  gap: "8px",
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
}));

export const MoviePoster = styled("img")(() => ({
  width: "44px",
  height: "44px",
  borderRadius: "4px",
}));
