import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  isError?: boolean;
}

function Input({ isError = false, ...attributes }: InputProps) {
  return <input className={`${styles.input} ${isError && styles.error}`} {...attributes} />;
}

export default Input;
