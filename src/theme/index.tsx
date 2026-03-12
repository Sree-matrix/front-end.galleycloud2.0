import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colourPaletteOptions } from "./colour-palette";
import { typographyOptions } from "./typography-options";

const baseTheme = createTheme({
  spacing: 10,

  typography: typographyOptions,

  palette: colourPaletteOptions,

  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: "#dee4ff",
          boxShadow: "none",
          height: "4.8rem",
        }, // palette.grey[400]
      },
    },

    MuiContainer: {
      defaultProps: { maxWidth: "xl" },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "0.25rem",
          height: "1.75rem",
          width: "1.75rem",
          borderRadius: "0.5rem",
          "& .MuiTouchRipple-root .MuiTouchRipple-child": {
            borderRadius: "inherit",
          },
        },
        sizeSmall: {
          height: "1.5rem",
          width: "1.5rem",
          borderRadius: "0.5rem",
        },
      },
    },

MuiButton: {
  defaultProps: {
    variant: "contained",
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      height: "2.25rem",
      // Mobile: Full width
      width: "100%", 
      // Tablet/Desktop (900px and up): Fixed Figma width
      "@media (min-width: 900px)": {
        width: "11.0625rem",
      },
      padding: "0.375rem 1rem",
      borderRadius: "999px",
      textTransform: "none",
      fontWeight: 400,
    },
    containedPrimary: {
      backgroundColor: "#0D184A",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#0a133a",
      },
    },
    containedInherit: {
      backgroundColor: "#FFFFFF",
      color: "#0D184A",
      border: "1px solid #E5E7EB",
      "&:hover": {
        backgroundColor: "#F9FAFB",
      },
    },
    outlinedPrimary: {
      color: "#0D184A",
      borderColor: "",
      backgroundColor: "transparent",
      "&:hover": {
        borderColor: "#0D184A",
        backgroundColor: "rgba(13, 24, 74, 0.04)",
      },
    },
  },
},
  },
});

export const theme = responsiveFontSizes(baseTheme);
