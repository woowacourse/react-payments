import { ComponentProps } from 'react';
import styles from './Button.module.css';

export default function Button({ children, ...props }: ComponentProps<'button'>) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
