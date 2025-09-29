import type { Theme } from '@mui/material/styles';

export const Divider = {
  MuiDivider: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          height: '0.125rem',
          border: '0.0625rem solid',
          borderColor: 'neutral.300',
          my: 3,
          width: '100%',
        }),
    },
  },
};
