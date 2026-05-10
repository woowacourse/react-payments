import type { ComponentProps } from 'react';

import cn from 'classnames';

import styles from './Button.module.css';

interface ButtonOwnProps {
  shape?: 'default';
  variant?: 'default' | 'primary';
  edge?: 'rounded' | 'flat';
  size?: 'normal' | 'large';
  block?: boolean;
}

interface ButtonProps extends Omit<ComponentProps<'button'>, keyof ButtonOwnProps>, ButtonOwnProps {}

export const Button = ({
  children,
  variant = 'default',
  edge = 'rounded',
  size = 'normal',
  block,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={cn(
        styles.button,
        styles[`variant-${variant}`],
        styles[`edge-${edge}`],
        styles[`size-${size}`],
        block && styles['is-block'],
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
