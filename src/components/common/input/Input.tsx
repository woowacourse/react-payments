import { forwardRef } from 'react';
import * as S from './Input.styled';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ isError = false, ...rest }: InputProps, ref) => {
    return <S.StyledInput $isError={isError} ref={ref} {...rest} />;
  },
);

export default Input;
