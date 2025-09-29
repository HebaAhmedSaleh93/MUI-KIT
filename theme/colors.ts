import type { PaletteMode } from '@mui/material';

const LIGHT_COLOR_THEME = {
  common: {
    black: "#000",
    white: "#fff",
    flush: "#f0f",
  },
  primary: {
    main: "#1976d2",
    light: "#42a5f5",
    dark: "#1565c0",
    contrastText: "#fff",
  },
  secondary: {
    main: "#9c27b0",
    light: "#ba68c8",
    dark: "#7b1fa2",
    contrastText: "#fff",
  },
  neutral: {
    50: " #fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#f5f5f5",
    A200: "#eeeeee",
    A400: "#bdbdbd",
    A700: "#616161",
    contrastText: "#fff",
  },
  warning: {
    main: "#ed6c02",
    light: "#ff9800",
    dark: "#e65100",
    contrastText: "#fff",
  },

  error: {
    main: "#d32f2f",
    light: "#ef5350",
    dark: "#c62828",
    contrastText: "#fff",
  },

  success: {
    main: "#2e7d32",
    light: "#4caf50",
    dark: "#1b5e20",
    contrastText: "#fff",
  },

  text: {
    primary: "#3F4A5A",
  },
  info: {
    main: "#98A3B3",
    light: "#eeee",
    dark: "#98A3",
    contrastText: "#fff",
  },
  avatar: {
    main: "#a80698",
    background: "rgba(168, 6, 152, 0.1)",
  },
};

export const getDesignColorPalette = (mode: PaletteMode) => ({
  mode,
  // TODO we have no palette for dark mode so for now I made them both the same palette
  ...(mode === 'light' ? LIGHT_COLOR_THEME : LIGHT_COLOR_THEME),
});
