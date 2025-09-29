import type { Theme } from '@mui/material/styles';

export const CircularProgress = {
  MuiCircularProgress: {
    styleOverrides: {
      colorSecondary: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: 'common.white',
        }),
    },
  },
};
