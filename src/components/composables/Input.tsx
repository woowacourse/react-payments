import { InputHTMLAttributes } from 'react';
import * as S from './input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

export default function Input({
  value,
  onChange,
  type,
  placeholder,
  id,
  isError,
  maxLength,
}: InputProps) {
  return (
    <S.Input
      value={value}
      onChange={onChange}
      type={type}
      maxLength={maxLength}
      placeholder={placeholder}
      id={id}
      $isError={isError}
    />
  );
}
