import type { ComponentProps } from 'react';

interface ButtonOwnProps {
  shape?: 'default';
  variant?: 'default' | 'primary';
  edge?: 'rounded' | 'flat';
  size?: 'normal' | 'large';
  block?: boolean;
}

export interface ButtonProps extends Omit<ComponentProps<'button'>, keyof ButtonOwnProps>, ButtonOwnProps {}
