import type { Theme } from '@mui/material/styles';

export const Paper = {
  MuiPaper: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          padding: 0,
          boxShadow:
            '0px 4px 8px -2px rgba(0, 10, 80, 0.1), 0px 2px 4px -2px rgba(0, 10, 80, 0.06)',
        }),
    },
  },
};
