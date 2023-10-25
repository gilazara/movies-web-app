import { TypeText } from "@mui/material/styles/createPalette";
import { PaletteOptions, SimplePaletteColorOptions } from "@mui/material";

interface DefaultPaletteOptions extends PaletteOptions {
  text: TypeText;
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  error: SimplePaletteColorOptions;
  tomato: string;
}

const palette: DefaultPaletteOptions = {
  primary: {
    main: "#fff",
    light: "#DEDEDE",
  },
  secondary: {
    main: "#7162D0",
    light: "#f7f5f1",
  },
  error: {
    main: "#F73E48",
  },
  text: {
    primary: "#000000",
    secondary: "#B2B2B2",
    disabled: "",
  },
  tomato: "#CA4445",
  green: {
    "400": "#79AC78",
    "500": "#618264",
  },
};

export default palette;
