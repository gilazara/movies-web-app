import React from "react";
import { styled } from "@mui/material";
import { Link as RouterLink, LinkProps } from "react-router-dom";

const StyledLink = styled(RouterLink)`
  color: #000;
  text-decoration: none;
`;

const Link: React.FC<LinkProps> = ({ children, to }) => (
  <StyledLink to={to}>{children}</StyledLink>
);

export default Link;
