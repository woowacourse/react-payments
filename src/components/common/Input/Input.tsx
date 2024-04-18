import { InputType } from './Input.type';

import styles from './Input.module.css';

const handleEnforceMaxLength = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { maxLength, value } = event.target;
  if (value.length > maxLength) {
    event.target.value = value.slice(0, maxLength);
  }
};

export interface InputProps {
  type?: InputType;
  value?: string | number;
  isError?: boolean;
  maxLength?: number;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  id?: string;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  maxLength = 4,
  isError = false,
  placeholder,
  value,
  onChange,
  id,
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
      onInput={handleEnforceMaxLength}
    />
  );
};

export default Input;
