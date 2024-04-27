import { ButtonHTMLAttributes } from 'react';
import * as S from './button.style';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: CustomButtonProps) {
  return <S.Button {...props}>{children}</S.Button>;
}
