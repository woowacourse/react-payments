import { ComponentProps } from 'react';
import styles from './Input.module.css';

export interface InputProps extends ComponentProps<'input'> {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidInput: boolean;
  dataInputId?: number;
}

function Input({
  type,
  name,
  id,
  placeholder,
  maxLength,
  value,
  handleInputChange,
  isValidInput,
  dataInputId,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={handleInputChange}
      className={`${styles.input} ${!isValidInput && styles.isNotValid} tx-md`}
      data-input-id={dataInputId}
    />
  );
}

export default Input;
