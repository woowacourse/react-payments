import cn from 'classnames';

import styles from './Button.module.css';

import type { ButtonProps } from './types';

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
