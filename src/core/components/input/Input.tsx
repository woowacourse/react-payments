import cn from 'classnames';
import styles from './Input.module.css';

import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input = ({ isError, ...rest }: InputProps) => {
  return <input className={cn(styles.input, isError && styles.isError)} {...rest} />;
};
