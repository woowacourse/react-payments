import { InputHTMLAttributes, forwardRef } from 'react';

import styles from './input.module.css';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  align?: 'left' | 'center';
  underlined?: boolean;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ align = 'left', underlined = false, ...props }, ref) => {
    return (
      <input
        className={`${styles.input} ${styles[align]} ${
          underlined ? styles.underlined : ''
        }`}
        {...props}
        ref={ref}
      />
    );
  },
);

export default Input;
