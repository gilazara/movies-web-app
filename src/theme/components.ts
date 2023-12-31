import palette from "./palette";
import { Theme } from "@mui/system";
import { Components } from "@mui/material";

const components: Components<Omit<Theme, "components">> = {
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      size: "medium",
    },
    variants: [
      {
        props: { variant: "outlined" },
        style: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#DEDEDE !important",
              background: "transparent !important",
            },
            "&:hover fieldset": {
              borderColor: palette.primary.light,
            },
          },
          "& .MuiInputLabel-root": {
            color: palette.text.secondary,
          },
          input: {
            background: palette.primary.main,
          },
        },
      },
    ],
  },
};

export default components;
