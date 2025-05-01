const colors = {
  black: '#000000',
  darkGray: '#333333',
  mediumGray: '#666666',
  lightGray: '#acacac',
  disabled: '#cccccc',
  error: '#f00',
  white: '#ffffff',
  text: {
    primary: '#333333',
    secondary: '#8b95a1',
    error: '#ff3d3d;',
  },
  border: {
    default: '#d7d7d7',
    hover: '#666666',
  },
  background: {
    white: '#ffffff',
    hover: '#f8f9fa',
  },
  card: {
    default: '#333333',
    text: '#ffffff',
    magnetic: '#2c2c2c',
    chip: '#ddcd78',
  },
} as const;

export const theme = {
  colors,
} as const;

export type Theme = typeof theme;
