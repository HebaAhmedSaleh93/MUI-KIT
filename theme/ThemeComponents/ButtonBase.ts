import type { Theme } from '@mui/material/styles';

export const ButtonBase = {
  MuiButtonBase: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          px: 2.5,
          py: 1.3,
          height: '2.5rem',
          textTransform: 'capitalize',
        }),
    },
  },
};
