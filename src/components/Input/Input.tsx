import styles from './Input.module.css';
import { ComponentProps } from 'react';

type Props = {
  value: string;
  isError: boolean;
} & ComponentProps<'input'>;

export default function Input({ value, isError, ...props }: Props) {
  return <input value={value} className={`${styles.input} ${isError ? styles.inValid : styles.valid}`} {...props} />;
}
