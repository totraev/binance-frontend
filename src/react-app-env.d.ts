/// <reference types="react-scripts" />
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      [name in 'mobile' | 'tablet' | 'desktop']: number;
    };
  }
}
