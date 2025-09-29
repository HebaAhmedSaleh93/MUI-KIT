import type { Theme } from '@mui/material/styles';

export const Button = {
  MuiButton: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          height: '2.5rem',
          textTransform: 'capitalize',
          px: 3,
          py: 1.5,
        }),
      containedPrimary: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          ':disabled': {
            color: 'neutral.400',
            backgroundColor: 'neutral.100',
            px: 3,
          },
        }),
    },
  },
};
