export const colorPalette = {
  black: '#000',
  white: '#fff',
  border: 'var(--color-gray-400)',
  error: 'var(--color-red-500)',

  'gray-50': '#fdfdfd',
  'gray-100': '#fafafa',
  'gray-200': '#e6e6e6',
  'gray-300': '#d4d4d4',
  'gray-400': '#8b95a1',
  'gray-500': '#6b7685',
  'gray-600': '#515c6b',
  'gray-700': '#3b4453',
  'gray-800': '#272e3b',
  'gray-900': '#181d27',
  'gray-950': '#0e1118',

  'red-50': '#fff5f5',
  'red-100': '#ffe0e0',
  'red-200': '#ffc1c1',
  'red-300': '#ff9494',
  'red-400': '#ff6b6b',
  'red-500': '#ff3d3d',
  'red-600': '#e52222',
  'red-700': '#c41a1a',
  'red-800': '#9e1515',
  'red-900': '#7c1111',
  'red-950': '#4a0a0a',
} as const;

// Semantic → CSS variable name mappings (drives FONT_COLOR in tokens.ts)
export const fontColor = {
  black: 'color-black',
  white: 'color-white',
  description: 'color-gray-400',
  error: 'color-red-500',
} as const;

export const colorCard = {
  chip: '#ddcd78',
  background: '#333',
  bc: '#f04651',
  shinhan: '#0046ff',
  kakao: '#ffe600',
  hyundai: '#000',
  woori: '#007bc8',
  lotte: '#ed1c24',
  hana: '#009490',
  kookmin: '#6a6056',
} as const;

export const spacing = {
  4: '4px',
  6: '6px',
  8: '8px',
  10: '10px',
  12: '12px',
  14: '14px',
  16: '16px',
  32: '32px',
  45: '45px',
} as const;

export const radius = {
  s: '3px',
  m: '4px',
  l: '8px',
} as const;

export const shadow = {
  card: '3px 3px 5px 0 #00000040',
} as const;

export const fontSize = {
  xs: '10px',
  s: '12px',
  m: '14px',
  l: '18px',
  xl: '20px',
  '2xl': '24px',
} as const;

export const fontWeight = {
  medium: '500',
  bold: '700',
} as const;
