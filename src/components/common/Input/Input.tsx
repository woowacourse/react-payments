import { forwardRef } from 'react';
import * as S from './Input.styles';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export default forwardRef(function Input({ isError = false, ...props }: InputProps, ref: React.Ref<HTMLInputElement>) {
  return <S.Input {...props} isError={isError} ref={ref} />;
});
