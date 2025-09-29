import type { Theme } from '@mui/material/styles';

export const Select = {
  MuiSelect: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          py: 0,
          px: 2,
          minWidth: 219,
        }),
    },
  },
};
