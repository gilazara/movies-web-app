import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    tomato: string;
    green: {
      "400": string;
      "500": string;
    };
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends Partial<CustomPalette> {}
}
