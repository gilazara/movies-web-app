import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface CustomPalette {
    tomato: string;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends Partial<CustomPalette> {}
}
