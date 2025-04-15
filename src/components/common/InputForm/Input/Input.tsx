import styles from './Input.module.css';

export interface InputProps {
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id?: string;
  placeholder?: string;
  maxLength?: number;
}

function Input({
  type,
  onChange,
  name,
  id,
  placeholder,
  maxLength,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      onChange={onChange}
      className={`${styles.input} tx-md`}
    />
  );
}

export default Input;
