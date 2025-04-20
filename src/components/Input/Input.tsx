import styles from './Input.module.css';
import { InputHTMLAttributes } from 'react';

type Props = {
  isValid: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ isValid, className, ...rest }: Props) {
  return (
    <input className={`${styles.input} ${isValid ? styles.valid : styles.inValid} ${className ?? ''}`} {...rest} />
  );
}
