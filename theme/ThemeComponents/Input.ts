import type { Theme } from '@mui/material/styles';

export const Input = {
  MuiInput: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          border: 0,
          outline: '0.0625rem solid transparent',
          px: 2,
          py: 1,
          minHeight: '2.5rem',
        }),

      input: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          border: 0,
          p: 0,
          '&::placeholder': {
            textTransform: 'capitalize',
          },
        }),
    },
  },
};
