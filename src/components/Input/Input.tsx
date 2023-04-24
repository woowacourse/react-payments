import * as styled from './Input.styled';
import { InputProps } from '../../types/props';
import { useEffect, useRef } from 'react';

const Input = (props: InputProps) => {
  const { value, onChange, width, type, name, placeholder, maxLength, autoFocus } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value.length >= maxLength) {
      inputRef.current?.blur();
      const nextInput = inputRef.current?.nextElementSibling;
      if (nextInput && nextInput instanceof HTMLElement) {
        nextInput.focus();
      }
    }
  }, [value, maxLength]);

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
      autoFocus={autoFocus}
    />
  );
};

export default Input;
