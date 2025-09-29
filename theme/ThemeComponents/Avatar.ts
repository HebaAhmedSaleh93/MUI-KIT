import type { Theme } from '@mui/material/styles';

export const Avatar = {
  MuiAvatar: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          fontWeight: 600,
          width: '2.625rem',
          height: '2.625rem',
          backgroundColor: 'avatar.background',
          color: 'avatar.main',
          textTransform: 'capitalize',
        }),
    },
  },
};
