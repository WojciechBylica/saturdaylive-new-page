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
  violet3percent: '#090a3308',
  violet2percent: '#090a3305',
  scienceBlue2percent: '#0366d633',
  scienceBlue50percent: '#0366d680'
};

const media = {
  sm: 767,
  md: 991
};

export const themeLight: DefaultTheme = {
  media,
  color: {
    background: colorNames.lightGrey,
    text: colorNames.mineShaft,
    textSecondary: colorNames.slateGrey
  }
};
