import styles from './Input.module.css';
import { ChangeEvent } from 'react';

type Props = {
  value: string;
  placeholder: string;
  isValid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
};

export default function Input({ value, placeholder, isValid, onChange, maxLength }: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${isValid ? styles.valid : styles.inValid}`}
      maxLength={maxLength}
    />
  );
}
