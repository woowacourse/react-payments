import { useEffect, useRef } from 'react';

import * as styled from './Input.styled';

export interface InputProps {
  onChange: React.ChangeEventHandler;
  width: 'xs' | 's' | 'm' | 'l' | 'xl';
  type: 'password' | 'number' | 'text';
  maxLength: number;
  value: string;
  name?: string;
  placeholder?: string;
  isFocus?: boolean;
}

const Input = (props: InputProps) => {
  const { value, onChange, width, type, name, placeholder, maxLength, isFocus } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocus) {
      inputRef.current?.focus();
    }
    if (value.length >= maxLength) {
      inputRef.current?.blur();
      const nextInput = inputRef.current?.nextElementSibling;
      if (nextInput && nextInput instanceof HTMLElement) {
        nextInput.focus();
      }
    }
  }, [value, isFocus]);

  return (
    <styled.Input
      name={name}
      value={value}
      onChange={onChange}
      width={width}
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      maxLength={maxLength}
      autoFocus={isFocus}
    />
  );
};

export default Input;
