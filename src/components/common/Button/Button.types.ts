import { ComponentProps, ReactNode } from 'react';

export type ButtonProps = ComponentProps<'button'> & {
  height: string;
  borderType: 'square' | 'rounded';
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  children: ReactNode;
};
