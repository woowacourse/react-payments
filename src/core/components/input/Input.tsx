import cn from 'classnames';
import styles from './Input.module.css';

import { forwardRef } from 'react';
import type { ComponentProps, ForwardedRef } from 'react';

interface InputOwnProps {
  type?: 'text' | 'tel' | 'password';
  isError?: boolean;
}

interface InputProps extends Omit<ComponentProps<'input'>, keyof InputOwnProps>, InputOwnProps {}

export const Input = forwardRef(({ isError, ...rest }: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return <input ref={ref} className={cn(styles.input, isError && styles.isError)} {...rest} />;
});
