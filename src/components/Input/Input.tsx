import { useInputFocus } from '../../hooks/useInputFocus';

import * as styled from './Input.styled';

export interface InputProps {
  onChange: React.ChangeEventHandler;
  width: 'xs' | 's' | 'm' | 'l' | 'xl';
  type: 'password' | 'number' | 'text';
  maxLength: number;
  value: string | null;
  inputmode: string;
  name?: string;
  placeholder?: string;
  isFocus?: boolean;
}

const Input = ({
  value,
  onChange,
  width,
  type,
  inputmode,
  name,
  placeholder,
  maxLength,
  isFocus,
}: InputProps) => {
  const inputRef = useInputFocus(isFocus, value, maxLength);

  return (
    <styled.Input
      name={name}
      value={value ?? ''}
      onChange={onChange}
      inputmode={inputmode}
      width={width}
      type={type}
      placeholder={placeholder}
      ref={inputRef}
      maxLength={maxLength}
      autoFocus={isFocus}
      autoComplete="on"
    />
  );
};

export default Input;
