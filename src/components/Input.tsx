import { ChangeEvent, HTMLInputTypeAttribute, forwardRef } from 'react';
import styled from 'styled-components';

interface InputProps {
  type?: HTMLInputTypeAttribute;
  name?: string;
  id?: string;
  maxLength?: number;
  inputMode?: 'numeric' | 'text';
  value?: string;
  onChange?: (value: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  autoFocus?: boolean;
  required?: boolean;
}

export const StyledInput = styled.input`
  background: var(--input-background);
  margin: 0 2.2vw;
  font-size: 14px;
  text-align: center;
  letter-spacing: 1px;
`;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    type,
    name,
    id,
    maxLength,
    inputMode,
    value,
    onChange,
    placeholder,
    autoFocus,
    required,
  } = props;

  return (
    <StyledInput
      ref={ref}
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      maxLength={maxLength}
      inputMode={inputMode}
      value={value}
      onChange={onChange}
      autoFocus={autoFocus}
      required={required}
    ></StyledInput>
  );
});

export default Input;
