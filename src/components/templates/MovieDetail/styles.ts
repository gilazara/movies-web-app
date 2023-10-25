import { Button, Grid, styled } from "@mui/material";

export const DetailsWrapper = styled(Grid)(({ theme }) => ({
  padding: "94px",
  minHeight: "800px",
  background: theme.palette.secondary.light,
}));

export const PlayerButton = styled(Button)(({ theme }) => ({
  background: theme.palette.green[400],
  marginTop: "18px",
  width: "200px",
  "& p": {
    fontWeight: 700,
  },
  "&:hover": {
    background: theme.palette.green[500],
  },
}));
