import { DefaultTheme } from 'styled-components';

const colorNames = {
  white: '#FFFFFF',
  whiteLilac: '#FBFBFE',
  lightGrey: '#E5E5E5',
  iron: '#d1d5da4d',
  semiGrey: '#d1d5da1a',
  slateGrey: '#6E7E91',
  mineShaft: '#252525',
  scienceBlue: '#0366D6',
  dodgerBlue: '#2188FF',
  semiDark: '#363636b8',
  black: '#333'
};

const media = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const themeLight: DefaultTheme = {
  media,
  color: {
    background: colorNames.lightGrey,
    primary: colorNames.mineShaft,
    secondary: colorNames.slateGrey
  }
};

export const themeDark: DefaultTheme = {
  media,
  color: {
    background: colorNames.lightGrey,
    primary: colorNames.mineShaft,
    secondary: colorNames.slateGrey
  }
};
