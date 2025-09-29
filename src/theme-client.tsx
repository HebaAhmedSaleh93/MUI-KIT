"use client";
import { useMemo, useState } from "react";
import { PaletteMode } from "@mui/material/styles/createPalette";
import { createMuiTheme } from "../theme";
import { ThemeProvider } from "@mui/material/styles";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode] = useState<PaletteMode>("light");
  // Update the theme only if the mode changes
  const theme = useMemo(() => createMuiTheme(mode), [mode]);

  return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
