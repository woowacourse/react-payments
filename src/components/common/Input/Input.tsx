import styles from './style.module.css';
import { ComponentPropsWithoutRef } from 'react';

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  label: string;
}

function Input({ label, ...attributes }: InputProps) {
  return (
    <div className={styles.inputForm}>
      <label htmlFor={attributes.id}>{label}</label>
      <input className={styles.input} {...attributes} />
    </div>
  );
}

export default Input;
