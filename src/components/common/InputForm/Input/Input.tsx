import { ComponentProps, useRef } from 'react';
import styles from './Input.module.css';

type InputAttribute = Pick<
  ComponentProps<'input'>,
  'type' | 'name' | 'id' | 'placeholder' | 'autoFocus'
>;

export interface InputProps extends InputAttribute {
  value: string;
  maxLength: number;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isValidInput: boolean;
  isRequired?: boolean;
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
  autoFocus,
  isRequired,
  dataInputId,
}: InputProps) {
  const ref = useRef<HTMLInputElement>(null);

  function moveFocusNextInput(e: React.ChangeEvent<HTMLInputElement>) {
    if (ref.current) {
      ref.current.focus();
    }

    const nextInput = e.target.nextElementSibling as HTMLInputElement;
    if (ref.current && nextInput && value.length === maxLength - 1) {
      nextInput.focus();
    }
  }

  function onChangeInputHandler(e: React.ChangeEvent<HTMLInputElement>) {
    handleInputChange(e);
    moveFocusNextInput(e);
  }

  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChangeInputHandler}
      autoFocus={autoFocus}
      required={isRequired}
      className={`${styles.input} tx-md ${
        !isValidInput ? styles.isNotValid : ''
      }`}
      data-input-id={dataInputId}
      ref={ref}
    />
  );
}

export default Input;
