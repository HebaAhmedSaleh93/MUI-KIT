import type { Theme } from '@mui/material/styles';

export const Drawer = {
  MuiDrawer: {
    styleOverrides: {
      paper: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          backgroundColor: 'primary.800',
          color: 'common.white',
        }),
    },
  },
};
