import type { Theme } from '@mui/material/styles';

export const Chip = {
  MuiChip: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          borderRadius: 1,
        }),
    },
  },
};
