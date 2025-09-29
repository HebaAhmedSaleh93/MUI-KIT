// This file is a middleware between MUI theme config and tailwind config
import { getDesignColorPalette } from './colors';
import { ELEVATIONS } from './shadows';
import { SPACING } from './spacing';
import { FONT_SIZES } from './typography';

function getFontSizes(): { [key: string]: string } {
  const fontSizes: { [key: string]: string } = {};
  for (const key in FONT_SIZES) {
    if (FONT_SIZES[key as keyof typeof FONT_SIZES]) {
      if (Object.prototype.hasOwnProperty.call(FONT_SIZES, key)) {
        fontSizes[key] = FONT_SIZES[key as keyof typeof FONT_SIZES]?.fontSize;
      }
    }
  }
  return fontSizes;
}

function getElevations(): { [key: string]: string } {
  const elevationAliases = ['none', 'sm', 'base', 'md', 'lg', 'xl', '2xl'];
  const boxShadows: { [key: string]: string } = {};
  elevationAliases.forEach((key, i) => {
    boxShadows[key] = ELEVATIONS[i];
  });
  return boxShadows;
}

export const colors = getDesignColorPalette('light');
export const boxShadow = getElevations();
export const fontSize = getFontSizes();
export const spacing = SPACING;
