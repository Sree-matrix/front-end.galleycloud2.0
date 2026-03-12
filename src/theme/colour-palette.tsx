import { PaletteOptions } from "@mui/material";

// ─── Brand Reference ──────────────────────────────────────────────────────────
// Primary brand blue:  #1C349E
// Primary dark navy:   #0D184A
// Accent / light blue: #E9ECFB (tint), #dae0fa (banner), #dee4ff (appbar)
// Secondary grey:      #6b7280
// ─────────────────────────────────────────────────────────────────────────────

export const colourPaletteOptions: PaletteOptions = {
  mode: "light",

  common: {
    black: "#0D184A", // Brand dark navy (replaces pure black in context)
    white: "#FFFFFF",
  },

  primary: {
    main: "#1C349E", // Brand Cobalt Blue
    light: "#31428E", // Lighter cobalt (hover / muted)
    dark: "#0D184A", // Dark Navy (headings, sidebar bg)
    contrastText: "#FFFFFF",
  },

  secondary: {
    main: "#000", // Brand secondary grey (labels, captions)
    light: "#9CA3AF", // Muted icons, placeholders
    dark: "#4A5568", // Mid-weight secondary text / icons
    contrastText: "#FFFFFF",
  },

  error: {
    main: "#BE123C",
    light: "#FB7185",
    dark: "#881337",
    contrastText: "#FFFFFF",
  },

  warning: {
    main: "#F59E0B",
    light: "#FCD34D",
    dark: "#B45309",
  },

  info: {
    main: "#0EA5E9",
    light: "#7DD3FC",
    dark: "#0369A1",
  },

  success: {
    main: "#16a34a", // Brand green (verified badges)
    light: "#6EE7B7",
    dark: "#047857",
  },

  grey: {
    900: "#0D184A", // Brand dark navy
    800: "#1a1a1a", // Dark body text
    700: "#1f2937", // Near-black body text
    600: "#4A5568", // Icon colour / mid-weight
    500: "#6b7280", // Secondary text
    400: "#dee4ff", // AppBar background
    300: "#dae0fa", // Hero banner / TOC card background
    200: "#E9ECFB", // Card accent surface (airport-card, experience-section)
    100: "#F3F4F6", // Lightest UI tint (airport-empty bg, search bg)
    50: "#F8F9FA",
  },

  text: {
    primary: "#1a1a1a", // Near-black body text
    secondary: "#6b7280", // Brand secondary grey
    disabled: "#9CA3AF",
  },

  divider: "#e5e7eb",

  background: {
    paper: "#FFFFFF",
    default: "#F8F9FA",
  },

  action: {
    active: "#6b7280",
    hover: "rgba(28, 52, 158, 0.04)",
    selected: "rgba(28, 52, 158, 0.08)",
    disabled: "rgba(28, 52, 158, 0.26)",
    disabledBackground: "rgba(28, 52, 158, 0.12)",
  },
};

// ─── Extended Surface Tokens (for sx reference) ───────────────────────────────
// Use these semantic names in comments/docs when mapping:
//   surface.accent   → grey[200]  → #E9ECFB  (card tinted backgrounds)
//   surface.subtle   → grey[100]  → #F3F4F6  (search inputs, empty states)
//   surface.banner   → grey[300]  → #dae0fa  (hero banners, TOC cards)
//   surface.appbar   → grey[400]  → #dee4ff  (appbar background)
// ─────────────────────────────────────────────────────────────────────────────
