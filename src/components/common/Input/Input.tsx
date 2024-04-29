import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isValid, ...rest }: InputProps, ref) => {
  return <S.Input ref={ref} $isValid={isValid} {...rest} />;
});

export default Input;
