import type { ElementType } from 'react';

import cn from 'classnames';

import { View } from '@/core/components/view';

import styles from './Button.module.css';

import type { ButtonProps } from './types';

export const Button = <T extends ElementType>({
  as = 'button',
  children,
  variant = 'default',
  edge = 'rounded',
  size = 'normal',
  block,
  ...rest
}: ButtonProps<T>) => {
  return (
    <View
      as={as}
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
    </View>
  );
};
