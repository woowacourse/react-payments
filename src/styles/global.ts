export const colors = {
  GY1: '#ACACAC',
  GY2: '#888888',
  GY3: '#333333',
  red: '#FF3D3D',
  gold: '#DDCD78',
  black: '#000000',
  white: '#FFFFFF',
} as const;

export type Colors = keyof typeof colors;
export const colorNames = Object.keys(colors) as Colors[];
