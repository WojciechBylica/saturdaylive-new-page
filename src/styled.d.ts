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
  primary: string;
  secondary: string;
  navBackground: string;
  navColor: string;
  navColorHover: string;
  navAsideBackground: string;
  linkHoverPrimary: string,
  linkHoverBackground: string,
}

declare module 'styled-components' {
  export interface DefaultTheme {
    media: IScreenWidth;
    color: IColors;
  }
}
