import type { Theme } from '@emotion/react';
import { colors } from './tokens';

export const lightTheme: Theme = {
  colors: {
    primaryText: colors.cyan.darker,
    background: colors.grayscale.white,
  },
};

export const darkTheme: Theme = {
  colors: {
    primary: colors.cyan.medium,
    background: colors.grayscale.black,
  },
};

export type AppTheme = typeof lightTheme;