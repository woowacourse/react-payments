export type SpacingToken = 4 | 6 | 8 | 10 | 12 | 14 | 16 | 32 | 45;

export const SPACING: Record<SpacingToken, string> = {
  4: 'var(--spacing-4)',
  6: 'var(--spacing-6)',
  8: 'var(--spacing-8)',
  10: 'var(--spacing-10)',
  12: 'var(--spacing-12)',
  14: 'var(--spacing-14)',
  16: 'var(--spacing-16)',
  32: 'var(--spacing-32)',
  45: 'var(--spacing-45)',
};

export const FONT_SIZE = {
  xs: 'var(--font-size-xs)',
  s: 'var(--font-size-s)',
  m: 'var(--font-size-m)',
  l: 'var(--font-size-l)',
  xl: 'var(--font-size-xl)',
  '2xl': 'var(--font-size-2xl)',
} as const;

export type FontSizeToken = keyof typeof FONT_SIZE;

export const FONT_WEIGHT = {
  medium: 'var(--font-weight-medium)',
  bold: 'var(--font-weight-bold)',
} as const;

export type FontWeightToken = keyof typeof FONT_WEIGHT;

export const FONT_COLOR = {
  black: 'var(--color-black)',
  white: 'var(--color-white)',
  description: 'var(--color-description)',
  error: 'var(--color-error)',
} as const;

export type FontColorToken = keyof typeof FONT_COLOR;

export const RADIUS = {
  s: 'var(--radius-s)',
  m: 'var(--radius-m)',
  l: 'var(--radius-l)',
} as const;

export type RadiusToken = keyof typeof RADIUS;

export const SHADOW = {
  card: 'var(--shadow-card)',
} as const;

export type ShadowToken = keyof typeof SHADOW;
