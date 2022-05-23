/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import theme from './theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}

export type ColorsProps = {
  primary: string;
  secondary: string;
  info: string;
  background: string;
  shape: string;
  success: string;
  danger: string;
  new: string;
  header: string;
  text: string;
  disabled: string;
  gray600: string;
  gray400: string;
  gray300: string;
  gray200: string;
  gray100: string;

  violet50: string;
  green100: string;
  taskSuccess: string;
  taskOpened: string;
};
