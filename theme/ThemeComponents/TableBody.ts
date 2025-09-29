import type { Theme } from '@mui/material/styles';

export const TableBody = {
  MuiTableBody: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          '& .MuiTableRow-root:not(:hover):nth-of-type(odd)': {
            backgroundColor: 'common.white',
          },
          '& .MuiTableRow-root:not(:hover):nth-of-type(even)': {
            backgroundColor: 'neutral.100',
          },
        }),
    },
  },
};
