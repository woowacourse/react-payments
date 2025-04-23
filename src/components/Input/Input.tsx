import styles from './Input.module.css';
import { ChangeEvent, ComponentProps } from 'react';

type Props = {
  value: string;
  placeholder: string;
  isError: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
} & ComponentProps<'input'>;

export default function Input({ value, placeholder, isError, onChange, maxLength, ...props }: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`${styles.input} ${isError ? styles.inValid : styles.valid}`}
      maxLength={maxLength}
      {...props}
    />
  );
}
