import { ComponentProps } from 'react';
import styles from './Button.module.css';
type ButtonType = {} & ComponentProps<'button'>;

export default function Button({ children }: ButtonType) {
  return <button className={styles.button}>{children}</button>;
}
