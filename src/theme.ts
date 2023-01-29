import { DefaultTheme } from 'styled-components';

const colorNames = {
  white: '#FFFFFF',
  whiteLilac: '#FBFBFE',
  gold: '#ffd700',
  lightGrey: '#E5E5E5',
  // iron: '#d1d5da4d',
  // semiGrey: '#d1d5da1a',
  // slateGrey: '#6E7E91',
  mineShaft: '#252525',
  cornFlowerBlue: '#6195ED',
  // dodgerBlue: '#2188FF',
  // semiDark: '#363636b8',
  halfBlack: '#00000080',
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
    backgroundDark: colorNames.black,
    primary: colorNames.black,
    secondary: colorNames.white,
    navBackground: colorNames.black,
    navColor: colorNames.white,
    navColorHover: colorNames.gold,
    navAsideBackground: colorNames.halfBlack,
    linkHoverPrimary: colorNames.cornFlowerBlue,
    linkHoverBackground: colorNames.black
  },
  boxShadow: `1px 2px 5px ${colorNames.black}`
};
