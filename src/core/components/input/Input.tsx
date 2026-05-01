import cn from 'classnames';
import styles from './Input.module.css';

interface InputProps {
  type?: 'text' | 'tel';
  placeholder?: string;
  maxLength?: number;
  isError?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type = 'text', placeholder, maxLength, isError, value, onChange, onBlur }: InputProps) => {
  return (
    <input
      type={type}
      className={cn(styles.input, isError && styles.isError)}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};
