import palette from "./palette";
import components from "./components";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode;
}

export const breakPoints = {
  xs: 0,
  mb: 375,
  mb2: 450,
  mb3: 775,
  sm: 992,
  m: 1260,
  md: 1440,
  lg: 1650,
  xl: 1920,
};

export const mainTheme = createTheme({
  palette,
  components,
  breakpoints: {
    values: breakPoints,
  },
});

const MuiThemeWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeWrapper;
