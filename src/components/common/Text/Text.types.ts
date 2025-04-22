import { ComponentProps, ReactNode } from 'react';

import { Colors } from '@/styles/global';

export type TextProps = {
  /**
   * Sets the text variant.
   */
  variant: 'Title' | 'Body' | 'Caption';
  /**
   * Sets the font weight.
   * @default medium
   */
  fontWeight?: 'regular' | 'medium' | 'semibold' | 'bold';
  /**
   * Sets the text color.
   * @default black
   */
  color?: Colors;
  /**
   * Sets the text content.
   */
  children: ReactNode;
} & ComponentProps<'p'>;
