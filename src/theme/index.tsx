import palette from "./palette";
import components from "./components";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

interface Props {
  children: React.ReactNode;
}

const mainTheme = createTheme({
  palette,
  components,
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
