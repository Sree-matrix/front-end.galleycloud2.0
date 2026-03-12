import { TypographyVariantsOptions } from "@mui/material";

const FONT_ROBOTO = '"Roboto", sans-serif';
const FONT_QUATTROCENTO = '"Quattrocento", serif';

export const typographyOptions: TypographyVariantsOptions = {
  allVariants: {
    fontFamily: FONT_ROBOTO,
    fontWeight: 400,
  },

  h1: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "4rem",
    lineHeight: 1.2,
    fontWeight: 400,
    "@media (min-width:400px)": { fontSize: "58px" }, // Small phones
    "@media (min-width:600px)": { fontSize: "2.5rem" }, // Tablets
    "@media (min-width:960px)": { fontSize: "4rem" }, // Laptops & Desktops
  },

  h2: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "2.75rem",
    letterSpacing: "0.02em",
    lineHeight: 1.3,
    fontWeight: 400,
    "@media (min-width:400px)": { fontSize: "41px" }, // Small phones
    "@media (min-width:600px)": { fontSize: "2.5rem" }, // Tablets
    "@media (min-width:960px)": { fontSize: "51px" }, // Laptops & Desktops
  },

  h3: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "2rem",
    lineHeight: 1.4,
    fontWeight: 400,
      "@media (min-width:400px)": { fontSize: "33px" }, // Small phones
    "@media (min-width:600px)": { fontSize: "2.5rem" }, // Tablets
    "@media (min-width:960px)": { fontSize: "2rem" }, // Laptops & Desktops
  },

  h4: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "1.5rem",
    lineHeight: 1.5,
    fontWeight: 400,
  },

  h5: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "1.25rem",
    lineHeight: 1.6,
    fontWeight: 500,
  },

  h6: {
    fontFamily: FONT_QUATTROCENTO,
    fontSize: "1rem",
    lineHeight: 1.2,
    fontWeight: 400,
  },

  body1: {
    fontFamily: FONT_ROBOTO,
    fontSize: "1rem",
    letterSpacing: "0.01em",
    lineHeight: 1.7,
    fontWeight: 400,
  },

  body2: {
    fontFamily: FONT_ROBOTO,
    fontSize: "1rem",
    lineHeight: 1.75,
    fontWeight: 400,
  },

  subtitle1: {
    fontFamily: FONT_ROBOTO,
    fontSize: "1.125rem",
    lineHeight: 1.4,
    fontWeight: 400,
  },

  caption: {
    fontFamily: FONT_ROBOTO,
    fontSize: "0.875rem",
    lineHeight: 1.6,
    fontWeight: 400,
  },

  button: {
    fontFamily: FONT_ROBOTO,
    fontSize: "0.875rem",
    fontWeight: 500,
  },
};
