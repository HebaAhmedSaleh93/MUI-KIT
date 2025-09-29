import type { Theme } from '@mui/material/styles';

export const OutlinedInput = {
  MuiOutlinedInput: {
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
          p: 0,
          '&::placeholder': {
            textTransform: 'capitalize',
          },
        }),

      notchedOutline: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          border: '0.0625rem solid',
          borderColor: 'neutral.300',
        }),
    },
  },
};
