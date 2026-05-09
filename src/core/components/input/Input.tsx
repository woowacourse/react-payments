import cn from 'classnames';
import styles from './Input.module.css';

import type { InputHTMLAttributes, Ref } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: Ref<HTMLInputElement>;
  isError?: boolean;
}

export const Input = ({ ref, isError, ...rest }: InputProps) => {
  return <input ref={ref} className={cn(styles.input, isError && styles.isError)} {...rest} />;
};
