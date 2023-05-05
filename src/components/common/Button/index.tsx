import type { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'card' | 'default';
  color?: 'white' | 'gray';
  padding?: boolean;
  children: ReactNode;
}

const Button = ({
  children,
  size = 'default',
  color = 'white',
  padding = false,
  ...props
}: Props) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[color]} ${
        padding ? styles.padding : ''
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
