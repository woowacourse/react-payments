import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  align?: 'left' | 'center' | 'right';
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ align = 'left', ...props }, ref) => {
    return (
      <input
        className={`${styles.input} ${styles[align]}`}
        {...props}
        ref={ref}
      />
    );
  },
);

export default Input;
