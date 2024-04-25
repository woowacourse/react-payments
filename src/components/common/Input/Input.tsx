import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isValid, ...rest }, ref) => {
  return <S.Input $isValid={isValid} ref={ref} {...rest} />;
});

export default Input;
