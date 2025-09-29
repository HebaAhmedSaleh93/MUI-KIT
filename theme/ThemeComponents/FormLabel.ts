import type { Theme } from '@mui/material/styles';

export const FormLabel = {
  MuiFormLabel: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          textTransform: 'capitalize',
          color: 'neutral.700',
          display: 'flex',
          typography: 'sm',
          mb: 0.25,
          '&.Mui-error': {
            mt: 1,
          },
        }),
    },
  },
};
