import type { Theme } from '@mui/material/styles';

export const PaginationItem = {
  MuiPaginationItem: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          width: 32,
          backgroundColor: 'neutral.100',

          '&.Mui-selected': {
            text: {
              fontWeight: 600,
            },
          },
        }),
      previousNext: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          backgroundColor: 'common.white',
          border: '0.0625rem solid ',
          borderColor: 'neutral.200',
        }),

      ellipsis: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }),
    },
  },
};
