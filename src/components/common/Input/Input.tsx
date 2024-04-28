import { InputHTMLAttributes, forwardRef } from 'react';
import * as S from './Input.style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ isError, ...rest }, ref) => {
  return <S.Input $isError={isError} ref={ref} {...rest} />;
});

export default Input;
