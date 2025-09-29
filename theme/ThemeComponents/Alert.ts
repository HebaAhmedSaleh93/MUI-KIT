import { colors } from "@mui/material";
import type { Theme } from "@mui/material/styles";

export const Alert = {
  MuiAlert: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          fontSize: "1rem",
          border: 1,
          borderColor: "transparent",
        }),

      filledSuccess: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "success.main",
        }),

      filledError: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "error.main",
        }),

      filledInfo: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "info.main",
        }),

      filledWarning: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: "common.white",
          backgroundColor: "warning.main",
        }),
    },

    outlinedSuccess: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        backgroundColor: "success.light",
      }),

    outlinedError: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        backgroundColor: "error.light",
      }),

    outlinedInfo: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        backgroundColor: "info.light",
      }),

    outlinedWarning: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        backgroundColor: "warning.light",
      }),

    outlined: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        backgroundColor: "warning.light",
      }),
  },
};
