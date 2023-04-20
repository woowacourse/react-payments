import * as styled from './Input.styled';
// import { InputProps } from '../../types/props';
import { useEffect, useRef } from 'react';

export type width = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface InputProps {
  value: string;
  onChange: React.ChangeEventHandler;
  width: width;
  center?: boolean;
  type: 'password' | 'number' | 'text';
  maxLength: number;
  name?: string;
  placeholder?: string;
}

const Input = (props: InputProps) => {
  const { value, onChange, width, type, center, name, placeholder, maxLength } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (value.length >= maxLength) {
      inputRef.current?.blur();
      const nextInput = inputRef.current?.nextElementSibling;
      if (nextInput && nextInput instanceof HTMLElement) {
        nextInput.focus();
      }
    }
  }, [value]);

  return (
    <styled.Input
      name={name}
      value={value}
      onChange={onChange}
      center={center}
      width={width}
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      maxLength={maxLength}
    />
  );
};

export default Input;
