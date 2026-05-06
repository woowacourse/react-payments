import cn from 'classnames';
import styles from './Input.module.css';

import type { ComponentProps } from 'react';

interface InputOwnProps {
  type?: 'text' | 'tel';
  isError?: boolean;
}

interface InputProps extends Omit<ComponentProps<'input'>, keyof InputOwnProps>, InputOwnProps {}

export const Input = ({ isError, ...rest }: InputProps) => {
  return <input className={cn(styles.input, isError && styles.isError)} {...rest} />;
};
