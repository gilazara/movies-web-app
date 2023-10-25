import { Box, styled } from "@mui/material";
import poster from "src/assets/images/poster.jpg";

export const Layout = styled(Box)(({ theme }) => ({
  width: "100%",
  position: "relative",
  height: "70vh",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  opacity: 0.9,
  backgroundImage: `url(${poster})`,
  "& h2": {
    textAlign: "center",
    color: theme.palette.primary.main,
  },
  "& .menu": {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  "@media (max-height: 850px)": {
    height: "90vh",
  },
}));

export const GenresList = styled(Box)(() => ({
  display: "flex",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
  position: "absolute",
  bottom: 0,
  zIndex: -1,
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
