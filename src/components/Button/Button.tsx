import { ComponentProps } from 'react';
import styles from './Button.module.css';
type ButtonType = {} & ComponentProps<'button'>;

export default function Button({ children, ...props }: ButtonType) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
