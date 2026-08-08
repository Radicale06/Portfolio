import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryForeground: string;
      secondary: string;
      secondaryForeground: string;
      background: string;
      surface: string;
      muted: string;
      text: string;
      textSecondary: string;
      border: string;
      accent: string;
      gradient: string;
    };
    fonts: {
      primary: string;
      secondary: string;
    };
    breakpoints: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
