import type { Theme } from '@mui/material/styles';

export const List = {
  MuiList: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          p: 0.5,
          borderRadius: 4,
        }),
    },
  },
};
