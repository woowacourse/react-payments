import * as S from './Input.styles';
import { ChangeEventHandler } from 'react';

export interface InputProps {
  placeholder: string;
  maxLength: number;
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  isError: boolean;
}

export default function Input({ placeholder, maxLength, id, value, onChange, isError }: InputProps) {
  return (
    <S.Input
      type="text"
      placeholder={placeholder}
      maxLength={maxLength}
      id={id}
      value={value}
      onChange={onChange}
      isError={isError}
    />
  );
}
