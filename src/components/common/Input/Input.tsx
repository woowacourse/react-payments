import styles from './style.module.css';
import { ComponentPropsWithRef, ForwardedRef, forwardRef } from 'react';

interface InputProps extends ComponentPropsWithRef<'input'> {
  variant?: 'outline' | 'underline';
  isError?: boolean;
}

function Input(
  { variant = 'outline', isError = false, ...attributes }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  const visualStyle = variant === 'outline' ? styles.outline : styles.underline;

  return (
    <input
      ref={ref}
      className={`${styles.input} ${visualStyle} ${isError ? styles.error : ''}`}
      {...attributes}
    />
  );
}

export default forwardRef(Input);
