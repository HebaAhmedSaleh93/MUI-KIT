import { createTheme } from '@mui/material/styles';
import type { Shadows } from '@mui/material/styles';
const { shadows: defaultShadows } = createTheme();

export const ELEVATIONS = [
  'none',
  '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
  '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10)',
  '0px 2px 4px -2px rgba(0, 10, 80, 0.06), 0px 4px 8px -2px rgba(0, 10, 80, 0.10)',
  '0px 4px 6px -2px rgba(0, 10, 80, 0.03), 0px 12px 16px -4px rgba(0, 10, 80, 0.08)',
  '0px 8px 8px -4px rgba(0, 10, 80, 0.03), 0px 20px 24px -4px rgba(0, 10, 80, 0.08)',
  '0px 32px 64px -12px rgba(0, 10, 80, 0.14)',
];

export const shadows = ELEVATIONS.concat(
  defaultShadows.splice(0, ELEVATIONS?.length)
) as Shadows;
