import '@mui/material/styles';
import type { TypographyOptions } from '@mui/material/styles/createTypography';
import '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    '2xl': React.CSSProperties;
    '3xl': React.CSSProperties;
    '4xl': React.CSSProperties;
    '5xl': React.CSSProperties;
    '6xl': React.CSSProperties;
    '7xl': React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    xs: React.CSSProperties;
    sm: React.CSSProperties;
    base: React.CSSProperties;
    lg: React.CSSProperties;
    xl: React.CSSProperties;
    '2xl': React.CSSProperties;
    '3xl': React.CSSProperties;
    '4xl': React.CSSProperties;
    '5xl': React.CSSProperties;
    '6xl': React.CSSProperties;
    '7xl': React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    xs: true;
    sm: true;
    base: true;
    lg: true;
    xl: true;
    '2xl': true;
    '3xl': true;
    '4xl': true;
    '5xl': true;
    '6xl': true;
    '7xl': true;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
  }
}

export const FONT_SIZES = {
  xs: {
    fontSize: '0.75rem',
    lineHeight: '1.125rem',
  },
  sm: {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  base: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  lg: {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  xl: {
    fontSize: '1.25rem',
    lineHeight: '1.875rem',
  },
  '2xl': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  '3xl': {
    fontSize: '1.875rem',
    lineHeight: '2.375rem',
  },
  '4xl': {
    fontSize: '2.2rem',
    lineHeight: '2.7rem',
  },
  '5xl': {
    fontSize: '3rem',
    lineHeight: '3.75rem',
  },
  '6xl': {
    fontSize: '3.75rem',
    lineHeight: '4.5rem',
  },
  '7xl': {
    fontSize: '4.5rem',
    lineHeight: '5.625rem',
  },
} as const;

export const FONT_FAMILY = ['Galano Grotesque Alt', 'sans-serif'].join(',');

export const typography: TypographyOptions = {
  ...FONT_SIZES,
  fontFamily: FONT_FAMILY,
};
