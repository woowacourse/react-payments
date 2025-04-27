import styles from './Input.module.css';
import { ChangeEvent, ComponentProps } from 'react';

type Props = {
  value: string;
  isError: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} & ComponentProps<'input'>;

export default function Input({ value, isError, onChange, ...props }: Props) {
  return <input value={value} onChange={onChange} className={`${styles.input} ${isError ? styles.inValid : styles.valid}`} {...props} />;
}
