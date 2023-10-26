import { styled } from "@mui/material";
import { Link as RouterLink, LinkProps } from "react-router-dom";

export const StyledLink = styled(RouterLink)(({ theme }) => ({
  textDecoration: "none",
  color: theme.palette.text.primary,
}));

const Link = ({ children, to }: LinkProps) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default Link;
