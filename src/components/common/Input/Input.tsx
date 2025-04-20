import * as S from './Input.styles';
import { ChangeEventHandler } from 'react';

export interface InputProps {
  placeholder?: string;
  maxLength?: number;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isError?: boolean;
}

export default function Input({ placeholder, maxLength, value, onChange, isError = false }: InputProps) {
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      value={value}
      onChange={onChange}
      isError={isError}
    />
  );
}
