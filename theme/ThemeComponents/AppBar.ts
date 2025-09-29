import type { Theme } from '@mui/material/styles';
import { HEADER_HEIGHT, MIN_HEADER_HEIGHT } from '../../constants/screen-css-constants';

export const AppBar = {
  MuiAppBar: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) =>
        theme.unstable_sx({
          px: 1,
          py: 0,
          backgroundColor: 'common.white',
          color: 'common.black',
          boxShadow: 'unset',
          borderBottom: '0.0625rem solid',
          borderColor: 'neutral.200',
          height: HEADER_HEIGHT,
          display: 'flex',
          justifyContent: 'center',

          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
          }),

          '@media(max-width: 48rem)': {
            width: '100%',
            height: MIN_HEADER_HEIGHT,
          },
        }),
    },
  },
};
