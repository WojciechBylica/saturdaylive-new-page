import 'styled-components';

interface IScreenWidth {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
}

interface IColors {
  background: string;
  text: string;
  textSecondary: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    media: IScreenWidth;
    color: IColors;
  }
}
