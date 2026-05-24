import type { ElementType } from 'react';

import type { PolymorphicProps } from '@/core/components/view';

export type AS = 'button' | 'a';

export type ButtonOwnProps = {
  shape?: 'default';
  variant?: 'default' | 'primary' | 'placeholder';
  edge?: 'rounded' | 'flat';
  size?: 'normal' | 'large';
  block?: boolean;
};

export type ButtonProps<T extends ElementType = AS> = PolymorphicProps<T, ButtonOwnProps>;
