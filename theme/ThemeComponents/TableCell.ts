import type { Theme } from '@mui/material/styles';

export const TableCell = {
  MuiTableCell: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          borderColor: 'neutral.200',
          color: 'neutral.700',
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: '1.25rem',
          px: 3,
          py: 1.5,
        }),
      head: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          color: 'neutral.500',
          fontWeight: 600,
          textTransform: 'uppercase',
          backgroundColor: 'neutral.200',
        }),
    },
  },
};
