import type { Theme } from '@mui/material/styles';

export const InputBase = {
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        border: 0,
        px: 2,
        py: 1,
        minHeight: '2.5rem',
        '.Mui-disabled ': {
          cursor: 'not-allowed',
        },
      }),

    input: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        p: '0 !important',
      }),

    notchedOutline: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        border: '0.0625rem solid',
        borderColor: 'primary.300',
      }),

    colorPrimary: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        border: '0 !important',
      }),

    error: ({ theme }: { theme: Theme }) =>
      theme.unstable_sx({
        border: 0,
      }),
  },
};
