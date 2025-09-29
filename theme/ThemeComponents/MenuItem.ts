import type { Theme } from '@mui/material/styles';

export const MenuItem = {
  MuiMenuItem: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          textTransform: 'capitalize',
          px: 2,
          py: 1,
          fontSize: '0.875rem',
          color: 'neutral.700',
          '&:hover': {
            backgroundColor: 'primary.200',
            color: 'primary.700',
          },
        }),
    },
  },
};
