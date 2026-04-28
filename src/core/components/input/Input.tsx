import cn from 'classnames';
import styles from './Input.module.css';

interface InputProps {
  placeholder?: string;
  maxLength?: number;
  isError?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ placeholder, maxLength, isError, value, onChange }: InputProps) => {
  return (
    <input
      className={cn(styles.input, isError && styles.isError)}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
    />
  );
};
