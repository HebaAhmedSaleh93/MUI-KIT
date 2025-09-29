import type { Theme } from '@mui/material/styles';

export const Table = {
  MuiTable: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          minWidth: '67.5rem',
        }),
    },
  },
};
