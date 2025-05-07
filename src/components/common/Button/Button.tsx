import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type Props = {
  text: string;
  height: string;
  borderRadius?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ text, height, borderRadius, ...rest }: Props) {
  return (
    <button className={styles.button} style={{ height, borderRadius }} {...rest}>
      {text}
    </button>
  );
}
