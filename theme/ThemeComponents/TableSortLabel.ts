import type { Theme } from '@mui/material/styles';

export const TableSortLabel = {
  MuiTableSortLabel: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          p: 0,
          textTransform: 'uppercase',
        }),
    },
  },
};
