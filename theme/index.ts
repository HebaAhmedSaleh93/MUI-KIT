"use client";

import { getDesignColorPalette } from "./colors";
import { MuiComponents } from "./components";
import { shadows } from "./shadows";
import { typography } from "./typography";
import { Components, createTheme, PaletteMode } from "@mui/material/styles";

export const createMuiTheme = (mode: PaletteMode) =>
  createTheme({
    palette: getDesignColorPalette(mode),
    typography,
    shadows,
    components: MuiComponents as Components,
  });
