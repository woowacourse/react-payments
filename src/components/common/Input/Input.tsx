import { InputHTMLAttributes } from 'react';
import * as S from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

export default function Input({ isValid, ...rest }: InputProps) {
  return <S.Input $isValid={isValid} {...rest} />;
}
