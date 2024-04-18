import { InputType } from './Input.type';

import styles from './Input.module.css';

export interface InputProps {
  id?: string;
  type?: InputType;
  value?: string | number;
  isError?: boolean;
  maxLength?: number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  id,
  type = 'text',
  maxLength = 4,
  isError = false,
  placeholder,
  value,
  onChange,
}) => {
  const errorInputClass = `${isError ? styles.errorInput : ''}`;

  return (
    <input
      className={`${styles.inputStyle} ${errorInputClass}`}
      id={id}
      maxLength={maxLength}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
