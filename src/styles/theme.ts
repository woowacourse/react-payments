import { Color } from '../utils/Color';

const SIZE_UNIT = 8;

export const theme = {
  size: (unit: number) => unit * SIZE_UNIT,

  fontSize: {
    '0': '10px',
    '1': '12px',
    '2': '14px',
    '3': '16px',
    '4': '18px',
    '5': '20px',
    '6': '22px',
    '7': '24px',

    small: '12px',
    medium: '14px',
    large: '16px',
    xlarge: '18px',
    xxlarge: '24px',
  },

  fontWeight: {
    normal: 500,
    bold: 700,
  },

  fontColor: {
    primary: '#383838',
    secondary: '#525252',
    warning: '#ff0000',
  },

  color: {
    background: '#ffffff',
    primary: '#0d78f2',
    white: '#ffffff',
    grey1: '#fdfdfd',
    grey2: '#ecebf1',
    grey3: '#e5e5e5',
  },
} as const;

type ExtractTheme<T extends Record<string, unknown>> = {
  [Key in keyof T]: T[Key] extends Record<string, unknown>
    ? ExtractTheme<T[Key]>
    : T[Key] extends string
    ? string
    : T[Key];
};

export type Theme = ExtractTheme<typeof theme>;

export const light: Theme = theme;

export const dark: Theme = {
  ...theme,

  fontColor: {
    ...theme.fontColor,
    primary: Color.fromHex(theme.fontColor.primary).oppositeWithLightness().toString(),
    secondary: Color.fromHex(theme.fontColor.secondary).oppositeWithLightness().toString(),
  },

  color: {
    ...theme.color,
    background: '#121212',
    grey1: Color.fromHex('#121212')
      .adjustLightness(Color.fromHex(theme.color.grey1).oppositeWithLightness().lightness)
      .toString(),
    grey2: Color.fromHex('#121212')
      .adjustLightness(Color.fromHex(theme.color.grey2).oppositeWithLightness().lightness)
      .toString(),
    grey3: Color.fromHex('#121212')
      .adjustLightness(Color.fromHex(theme.color.grey3).oppositeWithLightness().lightness)
      .toString(),
  },
};
